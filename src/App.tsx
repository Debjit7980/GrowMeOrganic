import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Pages/Form';
import Home from './Pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
