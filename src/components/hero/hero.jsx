import './hero.scss';
import { motion } from "motion/react";

//DarkMode
import { useDarkMode } from '../../context/DarkModeContext';

//assets
import Logo from '../../assets/pacot-logo-white.svg';
import Download from '../../assets/Download.svg';

function Hero () {
    const { darkMode } = useDarkMode();

    return (
            <div className={`hero-section ${darkMode? 'light':'dark'}`} id="home">
                <img src={Logo} alt="pacot logo"
                    style={{
                        width:"100px"
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}      // start state
                    animate={{ opacity: 1, y: 0 }}       // animate to this state
                    transition={{ duration: 1 }}       // duration of animation
                    >
                    <h1 className='title'>Hi! I'm Evane Pacot</h1>
                </motion.div>
                <p style={{
                    textAlign:"center",
                    color:"rgba(255,255,255,0.6)",
                }}>I am a Web Designer / Developer</p>
                
                <motion.a
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    transition={{ duration: 0.3 }}
                    href="Pacot Resume.pdf"
                    download
                    target='_blank'
                    rel="noopener noreferrer"
                    className='download-resume-btn-hero'
                >
                    Download Resume
                    <img src={Download} alt="Download Icon" aria-hidden="true" loading='lazy'
                        style={{width:"20px"}}
                    />
                </motion.a>

                <p style={{
                    textAlign:"center",
                    color:"rgba(255,255,255,0.6)",
                    fontSize:"0.7rem",
                    position:"absolute",
                    bottom:"30px",
                }}>Original Photo by Evane Pacot (Shot using DJI Mini 3)</p>
            </div>
    )
}

export default Hero;