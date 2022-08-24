import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import Members from './components/Members/Members';
import Navbar from './components/Navbar';
import Departments from './components/Departments/Departments'


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Members/>
    <Departments />
    <Footer />
    </>
  );
}

export default App;
