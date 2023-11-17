import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';
import BlogPage from './components/pages/BlogPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/contact' exact Component={ContactUs} />
          <Route path='/blog' exact Component={BlogPage} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
