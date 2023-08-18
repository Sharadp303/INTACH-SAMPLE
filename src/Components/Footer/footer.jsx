import React from "react"
import "./footer.css"

const Footer=()=>{
    return(
        <>
        <div className="footer">
        <div className="footer-container">
        <p>© Copyright 2016, all rights reserved with  <strong>INTACH</strong></p>
        <a href="www.google.com"><img className="footericon" src="./Images/email.png" alt="" /></a>
        <a href="www.google.com"><img className="footericon" src="./Images/share.png" alt="" /></a>
        <a href="www.google.com"><img className="footericon" src="./Images/printing.png" alt="" /></a>
        </div>
        <span className="siteby">Site by:<a href="www.google.com">Sharad</a></span>
        </div>
        </>
    );
}
export default Footer;