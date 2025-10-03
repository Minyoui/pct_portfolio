import './navbar.css';
import { motion } from "motion/react";

//assets
import Profile from '../../assets/pacot-model.png';

//logos
import Facebook from '../../assets/Facebook.svg';
import Github from '../../assets/Github.svg';
import Instagram from '../../assets/Instagram.svg';
import Jobstreet from '../../assets/Jobstreet.svg';
import LinkedIn from '../../assets/LinkedIn.svg';

function Navbar () {

    return (
        <>
            <div className='navbar-container'>
                <img src={Profile} alt="Profile Photo" className='profile-photo'
                    style={{
                       width:"100px",
                       height:"100px",
                       outline:"solid 5px #2B2B2B",
                       borderRadius:"50%",
                       position:"absolute",
                       left:"30px",
                       top:"10px"
                    }}/>

                <li className='navigation'>
                    <a href="#about"><div className="underline" style={{backgroundColor:"white",height:"1px"}}/>About</a>
                    <a href="#skills"><div className="underline" style={{backgroundColor:"white",height:"1px"}}/>Skills</a>
                    <a href="#projects"><div className="underline" style={{backgroundColor:"white",height:"1px"}}/>Projects</a>
                    <a href="#contact"><div className="underline" style={{backgroundColor:"white",height:"1px"}}/>Contact</a>
                </li>

                <div className='social-media-icons'>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        href=""
                        target="_blank"
                    >
                        <img src={Facebook} alt="Facebook"/>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        href=""
                        target="_blank"
                    >
                        <img src={Instagram} alt="Instagram"/>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        href=""
                        target="_blank"
                    >
                        <img src={LinkedIn} alt="LinkedIn"/>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        href=""
                        target="_blank"
                    >
                        <img src={Jobstreet} alt="Jobstreet"/>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        href=""
                        target="_blank"
                    >
                        <img src={Github} alt="Github"/>
                    </motion.a>

                </div>  
            </div>
        </>
    )
}

export default Navbar;