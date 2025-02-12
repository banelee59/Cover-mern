import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminNavbar from './components/AdminNavbar';
import Dashboard from './pages/Dashboard';
import ParlorManagement from './pages/ParlorManagement';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AdminNavbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/parlors" element={<ParlorManagement />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 