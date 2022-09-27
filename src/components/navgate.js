import React, { useState } from 'react';


import './components/navbar.css';



function navgate(){
    const [ac,setAc]=useState(null);
    return (
        <nav className="nav">
            <a href="#" className="nav__brand">virtusa</a>
            <ul className="nav__menu">
                <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Abput</a></li>
                <li className="nav__item"><a href="#" className="nav__link">skills</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>

            </ul>
            <div className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>


    );
}


export default navgate;