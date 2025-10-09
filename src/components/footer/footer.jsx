import './footer.css';
import { motion } from 'motion/react'

//assets
import Logo from '../../assets/pacot-logo-colored.svg';

//logos
import Facebook from '../../assets/Facebook.svg';
import Github from '../../assets/GitHub.svg';
import Instagram from '../../assets/Instagram.svg';
import Jobstreet from '../../assets/Jobstreet.svg';
import LinkedIn from '../../assets/LinkedIn.svg';

function Footer () {
    const socialLinks = [
            {src: Facebook, link:"https://www.facebook.com/evane.pacot/", label:"Facebook"},
            {src: Instagram, link:"https://www.instagram.com/evn_dc_pct/", label:"Instagram"},
            {src: LinkedIn, link:"https://www.linkedin.com/in/evane-pacot-260b85341", label:"LinkedIn"},
            {src: Jobstreet, link:"https://ph.jobstreet.com/profile/evane-pacot-r8yGs9PNjJ", label:"Jobstreet"},
            {src: Github, link:"https://github.com/Minyoui", label:"Github"}
        ]

    return (
        <>
            <div className='footer-section'>
                <a href="#home" className='footer-logo'>
                    <img src={Logo} alt="Pacot Logo" />
                    <span>PACOT</span>
                </a>
                <div className='social-links'>
                    {socialLinks.map((links, index) => (
                        <motion.a
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            href={links.link}
                            target="_blank">
                            <img src={links.src} alt={links.label}/>
                        </motion.a>
                    ))}
                </div>
                <p className="footer-ownership" style={{
                    textAlign:"center",
                    color:"white",
                    }}
                >© Evane Pacot 2025, All rights reserved. Icons by <a href="https://icons8.com" target="_blank" style={{textDecoration:"none", color:"white", fontWeight:"800"}}>Icons8</a></p>
            </div>
        </>
    )
}

export default Footer;