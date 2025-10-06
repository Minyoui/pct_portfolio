import './navbar.css';
import { motion } from "motion/react";
import { useState, useEffect, useRef } from 'react';

//assets
import Profile from '../../assets/pacot-model.png';
import LogoWhite from '../../assets/pacot-logo-white.svg';
import LogoColor from '../../assets/pacot-logo-colored.svg';
import Menu from '../../assets/Menu.svg';

//logos
import Facebook from '../../assets/Facebook.svg';
import Github from '../../assets/Github.svg';
import Instagram from '../../assets/Instagram.svg';
import Jobstreet from '../../assets/Jobstreet.svg';
import LinkedIn from '../../assets/LinkedIn.svg';

function Navbar () {
    const [scrolled, isScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const ref = useRef(null);
    
    // Navbar scroll identifier
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            isScrolled(offset > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Mobile Nav screen automatically closes when resized to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 720) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const links = [
        {src: Facebook, link:"https://www.facebook.com/evane.pacot/", label:"Facebook"},
        {src: Instagram, link:"https://www.instagram.com/evn_dc_pct/", label:"Instagram"},
        {src: LinkedIn, link:"https://www.linkedin.com/in/evane-pacot-260b85341", label:"LinkedIn"},
        {src: Jobstreet, link:"https://ph.jobstreet.com/profile/evane-pacot-r8yGs9PNjJ", label:"Jobstreet"},
        {src: Github, link:"https://github.com/Minyoui", label:"Github"}
    ]

    return (
        <div className='nav-wrapper'>
            <div className={`navbar-container ${scrolled? 'scrolled':''}`}>
                <a href="#home">
                    <img src={LogoColor} alt="Profile Photo" className='logo'/>
                </a>
                <div className='menu-divider'/>
                <img src={Menu} style={{width:"30px"}} className='menu-icon'/>
                <li className='navigation'>
                    <a href="#about"><div className="underline" style={{backgroundColor:"white",height:"1px"}}/>About</a>
                    <a href="#skills"><div className="underline" style={{backgroundColor:"white",height:"1px"}}/>Skills</a>
                    <a href="#projects"><div className="underline" style={{backgroundColor:"white",height:"1px"}}/>Projects</a>
                    <a href="#contact"><div className="underline" style={{backgroundColor:"white",height:"1px"}}/>Contact</a>
                </li>

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