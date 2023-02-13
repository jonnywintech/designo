import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import OurCompany from './components/our_company/OurCompany';
import Locations from './components/locations/Locations';
import Contact from './components/contact/Contact';
import WebDesign from './components/web_design/WebDesign';
import AppDesign from './components/app_design/AppDesign';
import GraphicDesign from './components/graphic_design/GraphicDesign';

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about-us" element={<OurCompany />}/>
            <Route path="/locations" element={<Locations />}/>
            <Route path="/contact-us" element={<Contact />}/>
            <Route path="/web-design" element={<WebDesign />}/>
            <Route path="/app-design" element={<AppDesign />}/>
            <Route path="/graphic-design" element={<GraphicDesign />}/>
        </Routes>
    </div>
  )
}

export default Main