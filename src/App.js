import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cover from './pages/Cover';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Capstone from './pages/Capstone';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/capstone" element={<Capstone />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;