import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import ProjectList from './pages/ProjectList';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/FeaturedProjects';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#aboutme" component={AboutMe} />
        <Route path="/#projects" component={Projects} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/projectlist" element={<ProjectList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;