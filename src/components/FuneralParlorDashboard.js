import React, { useState, useEffect } from 'react';

const FuneralParlorDashboard = () => {
  const [parlors, setParlors] = useState([]);
  const [selectedParlor, setSelectedParlor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, pending, approved, rejected
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchParlors();
  }, []);

  const fetchParlors = async () => {
    try {
      const response = await fetch('/api/parlors', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setParlors(data.data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching parlors:', error);
      setLoading(false);
    }
  };

  const handleStatusChange = async (parlorId, newStatus) => {
    try {
      const response = await fetch(`/api/parlors/${parlorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        fetchParlors(); // Refresh the list
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredParlors = parlors
    .filter(parlor => {
      if (filter === 'all') return true;
      return parlor.status === filter;
    })
    .filter(parlor =>
      parlor.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parlor.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Funeral Parlor Management</h1>
          <p className="mt-2 text-sm text-gray-600">
            Manage and review funeral parlor registrations
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-[#00c2ff] focus:ring-[#00c2ff]"
            >
              <option value="all">All Registrations</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
            <input
              type="text"
              placeholder="Search parlors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-[#00c2ff] focus:ring-[#00c2ff]"
            />
          </div>
          <div className="text-sm text-gray-600">
            Showing {filteredParlors.length} of {parlors.length} parlors
          </div>
        </div>

        {/* Parlors Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00c2ff] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading parlors...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParlors.map((parlor) => (
              <div
                key={parlor._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {parlor.businessName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Reg: {parlor.registrationNumber}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        parlor.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : parlor.status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {parlor.status.charAt(0).toUpperCase() + parlor.status.slice(1)}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Contact:</span>{' '}
                      {parlor.contactPerson.firstName} {parlor.contactPerson.lastName}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Email:</span> {parlor.contactPerson.email}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Location:</span>{' '}
                      {parlor.physicalAddress.city}, {parlor.physicalAddress.province}
                    </p>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <button
                      onClick={() => setSelectedParlor(parlor)}
                      className="px-3 py-1.5 text-sm font-medium text-[#00c2ff] border border-[#00c2ff] rounded-md hover:bg-[#00c2ff] hover:text-white transition-colors"
                    >
                      View Details
                    </button>
                    {parlor.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleStatusChange(parlor._id, 'approved')}
                          className="px-3 py-1.5 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleStatusChange(parlor._id, 'rejected')}
                          className="px-3 py-1.5 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed View Modal */}
        {selectedParlor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedParlor.businessName}
                  </h2>
                  <button
                    onClick={() => setSelectedParlor(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Business Details */}
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Trading As</p>
                        <p className="mt-1">{selectedParlor.tradingAs}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Registration Number</p>
                        <p className="mt-1">{selectedParlor.registrationNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">VAT Number</p>
                        <p className="mt-1">{selectedParlor.vatNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">FSPC Number</p>
                        <p className="mt-1">{selectedParlor.fspcNumber}</p>
                      </div>
                    </div>
                  </section>

                  {/* Services */}
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Services Offered</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(selectedParlor.services).map(([service, offered]) => (
                        offered && (
                          <div key={service} className="flex items-center gap-2">
                            <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-600">
                              {service.charAt(0).toUpperCase() + service.slice(1)}
                            </span>
                          </div>
                        )
                      ))}
                    </div>
                  </section>

                  {/* Compliance */}
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Compliance Status</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(selectedParlor.compliance).map(([doc, status]) => (
                        <div key={doc} className="flex items-center gap-2">
                          {status ? (
                            <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          <span className="text-sm text-gray-600">
                            {doc.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FuneralParlorDashboard; 