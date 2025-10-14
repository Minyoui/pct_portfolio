import './navbar.scss';
import { motion } from "motion/react";
import { useState, useEffect } from 'react';

//DarkMode
import { useDarkMode } from '../../context/DarkModeContext';

//assets
import LogoColor from '../../assets/pacot-logo-colored.svg';
import Menu from '../../assets/Menu.svg';

//logos
import Facebook from '../../assets/Facebook.svg';
import Github from '../../assets/GitHub.svg';
import Instagram from '../../assets/Instagram.svg';
import Jobstreet from '../../assets/Jobstreet.svg';
import LinkedIn from '../../assets/LinkedIn.svg';

function Navbar () {
    const [scrolled, isScrolled] = useState(false);
    const { darkMode } = useDarkMode();
    
    // Navbar scroll identifier
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            isScrolled(offset > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const links = [
        {src: Facebook, link:"https://www.facebook.com/evane.pacot/", label:"Facebook"},
        {src: Instagram, link:"https://www.instagram.com/evn_dc_pct/", label:"Instagram"},
        {src: LinkedIn, link:"https://www.linkedin.com/in/evane-pacot-260b85341", label:"LinkedIn"},
        {src: Jobstreet, link:"https://ph.jobstreet.com/profile/evane-pacot-r8yGs9PNjJ", label:"Jobstreet"},
        {src: Github, link:"https://github.com/Minyoui", label:"Github"}
    ]

    return (
        <div className={`nav-wrapper ${darkMode? 'light' : 'dark'}`}>
            <div className={`navbar-container ${scrolled? 'scrolled':''}`}>
                <img src={Menu} style={{width:"30px"}} className='menu-icon'/>
                <ul  className='navigation'>
                    <li>
                        <a href="#home">
                            <img src={LogoColor} alt="Profile Photo" className='logo'/>
                        </a>
                    </li>
                    <li className='nav-tabs'>
                        <a href="#about"><div className="underline"/>About</a>
                        <a href="#skills"><div className="underline"/>Skills</a>
                        <a href="#projects"><div className="underline"/>Projects</a>
                        <a href="#contact"><div className="underline"/>Contact</a>
                    </li>
                </ul>

                <div className='social-media-icons'>
                    {links.map((link, index) => (
                        <motion.a
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            href={link.link}
                            target="_blank"
                        >
                            <img src={link.src} alt={link.label}/>
                        </motion.a>
                    ))}
                </div>  
            </div>
        </div>
    )
}

export default Navbar;