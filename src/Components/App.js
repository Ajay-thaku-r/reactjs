import React,{ useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './css/App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Factorial from './pages/Factorial';
function App() {
  // const [counter, setCounter] = useState(1);
  // const result = factorial(counter);
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers([...users, {id: uuid(), ...user}])
  }
  console.log(users)
  return (
    <div>
        <Header />
          <Routes>
            <Route path="/" element={ <Home addUserHandler={ addUserHandler } /> } ></Route>
            <Route path="/about" element={ <About /> }></Route>
            <Route path="/contact" element={ <Contact /> }></Route>
            <Route path="/factorial" element={ <Factorial /> }></Route>
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
