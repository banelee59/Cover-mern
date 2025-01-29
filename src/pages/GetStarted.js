import React from 'react';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#00c2ff] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Started with CoverUp</h1>
          <p className="text-xl leading-relaxed">
            Simple steps to secure your family's future with the right burial scheme
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00c2ff] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Compare Plans</h2>
                  <p className="text-gray-600 mb-6">
                    Browse through our selection of burial schemes from top providers. Compare benefits, premiums, and coverage options to find the perfect match for your needs.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[#00c2ff]">✓</span>
                      View side-by-side comparisons
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00c2ff]">✓</span>
                      Filter by coverage amount
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00c2ff]">✓</span>
                      See detailed benefit breakdowns
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00c2ff] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose Coverage</h2>
                  <p className="text-gray-600 mb-6">
                    Select the right level of protection based on your family's needs and budget. Our experts are available to help you make an informed decision.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[#00c2ff]">✓</span>
                      Flexible coverage options
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00c2ff]">✓</span>
                      Customizable benefits
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00c2ff]">✓</span>
                      Expert guidance available
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00c2ff] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Easy Application</h2>
                  <p className="text-gray-600 mb-6">
                    Complete your application quickly and securely online. Our streamlined process makes getting covered simple and hassle-free.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-[#00c2ff]">✓</span>
                      Quick online process
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00c2ff]">✓</span>
                      Electronic document signing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00c2ff]">✓</span>
                      Instant confirmation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button className="bg-[#00c2ff] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#00b3eb] transition-colors shadow-lg">
              Start Your Comparison Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted; 