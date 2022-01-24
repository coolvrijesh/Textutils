import React from 'react'
import { Link } from 'react-router-dom'
import uniPeLogo from "./img/logo.png"

export default function Navbar(props) {
    return (        
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link className="navbar-brand logo pt-0" to="/"> {<img src={uniPeLogo} className="card-img-top" alt="..."/>} </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">{props.title}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">{props.contactText}</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/services">{props.servicesText}</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/form">Form</Link>
                    </li>

                    </ul>         
                </div> 
                </div>
         </nav>        
    )
}
