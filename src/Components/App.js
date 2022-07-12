import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
        <Header />
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/about" element={ <About /> }></Route>
            <Route path="/contact" element={ <Contact /> }></Route>
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
