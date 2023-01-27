import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import OurCompany from './components/our_company/OurCompany';
import Locations from './components/locations/Locations';
import Contact from './components/contact/Contact';

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/our-company" element={<OurCompany />}/>
            <Route path="/locations" element={<Locations />}/>
            <Route path="/contact-us" element={<Contact />}/>
        </Routes>
    </div>
  )
}

export default Main