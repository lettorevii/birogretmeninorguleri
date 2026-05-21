import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Products />
      <Features />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
