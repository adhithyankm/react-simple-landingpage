import React from 'react';

import './App.css';
import Navbarr from './components/navbar/Navbarr';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Developer from './components/developer/Developer';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
     <Navbarr/>
     <Hero/>
     <About/>
     <Developer/>
     <Subscribe/>
     <Footer/>

    </div>
  );
}

export default App;
