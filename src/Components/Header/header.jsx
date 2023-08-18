import React from 'react'
import "./header.css"
import Navbar from '../Navbar/navbar';
const Header=()=>{
    return (
        <>
        <div className='header-container'>
        <img className="headerLogo" src="./Images/logointach.png" alt="" />
            <div className='headerTitle'>
                <img src="./Images/logointachline.gif" alt="" />
                <p>Indian National Trust for Art and Cultural Heritage</p>
            </div>
            <div className="headerlinks">
                <a href="www.google.com" className="headerlinkcss">MoA Consultation</a>
                <span> | </span>
                <a href="www.google.com" className="headerlinkcss">INTACH CSR Proposals</a>
                <span> | </span>
                <a href="www.google.com" className="headerlinkcss">INTACH Awards</a>
                <span> | </span>
                <a href="www.google.com" className="headerlinkcss">Archives</a>
                <span> | </span>
                <a href="www.google.com" className="headerlinkcss">Contact</a>
                <span> | </span>
                <a href="www.google.com" className="headerlinkcss">Feedback/suggestion</a>
                <span> | </span>
                <a href="www.google.com" className="headerlinkcss">Sitemap</a>
            </div>
            <div className='inputGoogle'>
                <input className="inputGoogleInput" type="search" />
                <button className="inputGoogleButton">Search</button>
            </div>
        </div>
        <Navbar/>
        </>
    );

}
export default Header;