import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import VerifyPage from './components/VerifyPage';
import VerifyResult from './components/VerifyResult';
import Home from './components/Home'; // optional landing page
import './App.css';

// Component to handle dynamic titles
function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = 'Certifyr | By QuantLake';
    } else {
      document.title = 'Certifyr';
    }
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <TitleUpdater /> {/* Keep this outside Routes */}
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />                     {/* Landing page */}
          <Route path="/search-certificate" element={<VerifyPage />} />  {/* Optional form page */}
          <Route path="/verify" element={<VerifyResult />} />      {/* QR code result page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
