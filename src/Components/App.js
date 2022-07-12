import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MenuA from './MenuA';
function App() {
  return (
    <div>
        <Header />
        <BrowserRouter>
      <Routes>
        <Route path="/menuA" element={ <MenuA /> }></Route>
      </Routes>
      </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
