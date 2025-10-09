import './hero.css';
import { motion } from "motion/react";

//assets
import Logo from '../../assets/pacot-logo-white.svg';

function Hero () {
    return (
        <>
            <div className='hero-section' id="home">
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
                }}>I specialize in Front-End Development</p>


                <p style={{
                    textAlign:"center",
                    color:"rgba(255,255,255,0.6)",
                    fontSize:"0.7rem",
                    position:"absolute",
                    bottom:"30px",
                }}>Original Photo by Evane Pacot (Shot using DJI Mini 3)</p>
            </div>
        </>
    )
}

export default Hero;