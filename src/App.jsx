import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerifyForm from './components/VerifyForm';
import VerifyResult from './components/VerifyResult';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<VerifyForm />} />
          <Route path="/verify" element={<VerifyResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;