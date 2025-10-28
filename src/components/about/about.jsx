import './about.scss';
import { motion } from 'motion/react';

//DarkMode
import { useDarkMode } from '../../context/DarkModeContext';

//assets
import ModelOne from '../../assets/pacot-model-three.avif';
import ModelTwo from '../../assets/pacot-model-four.avif';

import Info from '../../assets/Info.png';

function About () {
    const { darkMode } = useDarkMode();

    return (
            <div className={`about-section ${darkMode? 'light':'dark'}`} id="about">
                <div className='profile-description'>
                    <p style={{
                        display:"flex",
                        alignItems:"center",
                        fontSize:"2rem",
                        fontWeight:"bold",
                        gap:"10px",
                    }}><img src={Info} alt="Info Icon" style={{
                        width:"40px",
                    }}/>About</p>
                    <p style={{

                        color:"#9c9c9cff"
                    }}>Hello! My name is <strong>Evane Dela Cruz Pacot,</strong> and I have a keen eye for creativity and design. I am deeply passionate about continuous learning to further hone my skills and grow as a professional with strong values and a solid work ethic. I’m always eager to take on new challenges, with the goal of contributing meaningfully to projects that blend innovation, aesthetics, and functionality. I thrive in collaborative environments where I can share ideas, learn from others, and continue developing both personally and professionally.</p>
                </div>
                <div className='profile-picture'>
                    <motion.img src={ModelOne} alt="Pacot Photo Two" loading='lazy' id="modelOne"
                        style={{opacity:"50%", filter:"blur(3px)"}}
                        whileHover={{scale: 1.1, opacity: 1, filter: "blur(0px)", zIndex:"3"}}
                        whileTap={{scale: 1.1, opacity: 1, filter: "blur(0px)", zIndex:"3"}}
                    />
                    <motion.img src={ModelTwo} alt="Pacot Photo One" loading='lazy' id="modelTwo"
                        style={{opacity:"100%", filter:"blur(0.5px)", zIndex:"2"}}
                        whileHover={{scale: 1.1, opacity: 1, filter: "blur(0px)", zIndex:"3"}}
                        whileTap={{scale: 1.1, opacity: 1, filter: "blur(0px)", zIndex:"3"}}
                    />
                </div>
            </div>
    )
}

export default About;