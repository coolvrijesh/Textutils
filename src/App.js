import logo from './logo.svg';
import './App.css'; 
import Navbar from './components/Navbar'; 
import Section from './components/Section';
import About from './components/About';
import Contact from './components/Contact'; 
import Services from './components/Services'; 
import Form from './components/Form';
import Footer from './components/Footer'; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (  
  <Router>
        <>
            <Navbar title="Home" aboutText="About Us" contactText="Contact Us" servicesText="Services" />
            <Routes>             
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/form" element={<Form/>} />
              <Route path="/" element={ <Section/>} />  
            </Routes>
           
            {/* <Footer/>             */}
        </>
  </Router>
  );
}

export default App;
