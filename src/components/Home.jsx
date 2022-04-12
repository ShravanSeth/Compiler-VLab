import React from 'react'
import  { useState, useEffect }  from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Dropdown from './Dropdown';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("navbar resized");
      }
    };

    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero/>
    <Footer/>
    </>
  )
}

export default Home