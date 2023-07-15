import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Navigation from './components/Navigation';
import Lifestyle from './components/Lifestyle';
import Shop from './components/Shop';
import Testlaptop from './components/Testlaptop';

const App = () => (
  <Router>
    <Navigation />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lifestyle" element={<Lifestyle />} exact />
        <Route path="/shop" element={<Shop />} exact />
        <Route path="/test" element={<Testlaptop />} exact />
      </Routes>
    </div>
  </Router>
);

export default App;
