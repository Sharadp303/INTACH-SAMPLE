import './contactus.css'
import {motion} from 'framer-motion'
const Contactus=()=>{
    return(
        <>
        <div className="contact-container">
            <div className="othersites">
                <h3>RELATED SITES</h3>
                
                <ul>
                    <li><a href="www.google.com"><img src="./Images/Links/jharkhand.png" alt="othersites" /></a></li>
                    <li><a href="www.google.com"><img src="./Images/Links/logo-iccrom.gif" alt="othersites" /></a></li>
                    <li><a href="www.google.com"><img src="./Images/Links/vmis_logo.png" alt="othersites" /></a></li>
                    <li><a href="www.google.com"><img src="./Images/Links/indiaculture.png" alt="othersites" /></a></li>
                    <li><a href="www.google.com"><img src="./Images/Links/logo.gif" alt="othersites" /></a></li>
                    <li><a href="www.google.com"><img src="./Images/Links/moud.png" alt="othersites" /></a></li>
                    <li><a href="www.google.com"><img src="./Images/Links/niua.png" alt="othersites" /></a></li>
                    <li><a href="www.google.com"><img src="./Images/Links/punjabgovt.png" alt="othersites" /></a></li>
                </ul>
               
               
            </div>
            <div className="follow">
                <h3>FOLLOW US</h3>
                <ul>
                    <li><a href="www.google.com"><motion.img whileHover={{scale:0.9}} src="./Images/Social/fbiconhm.gif" alt="follow" /></a></li>
                    <li><a href="www.google.com"><motion.img whileHover={{scale:0.9}} src="./Images/Social/tweeticonhm.gif" alt="follow" /></a></li>
                    <li><a href="www.google.com"><motion.img whileHover={{scale:0.9}} src="./Images/Social/insta-logo.png" alt="follow" /></a></li>
                    <li><a href="www.google.com"><motion.img whileHover={{scale:0.9}} src="./Images/Social/youtubeiconhm.gif" alt="follow" /></a></li>
                </ul>

            </div>
        </div>
        </>
    );
}
export default Contactus;