import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import ComparisonForm from './components/ComparisonForm';
import FuneralParlorRegistration from './components/FuneralParlorRegistration';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/comparison" element={<ComparisonForm />} />
          <Route path="/store-registration" element={<FuneralParlorRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 