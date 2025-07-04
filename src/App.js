import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RegisterFuneralParlour from './pages/RegisterFuneralParlour';
import FuneralRegistration from './components/FuneralRegistration';
import Comparison from './pages/Comparison';
import ComparisonForm from './components/ComparisonForm';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scrolls to top on every route change */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register-funeral-parlour" element={<RegisterFuneralParlour />} />
          <Route path="/register" element={<FuneralRegistration />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/store-registration" element={<ComparisonForm />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
