import './navbar.css';

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
                <img src={Profile} alt="Profile Photo" 
                    style={{
                       width:"100px",
                       height:"100px",
                       outline:"solid 5px rgba(25,25,25)",
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
                    <a href="" target="_blank"><img src={Facebook} /></a>
                    <a href="" target="_blank"><img src={Instagram} /></a>
                    <a href="" target="_blank"><img src={LinkedIn} /></a>
                    <a href="" target="_blank"><img src={Jobstreet} /></a>
                    <a href="" target="_blank"><img src={Github} /></a>
                </div>  
            </div>
        </>
    )
}

export default Navbar;