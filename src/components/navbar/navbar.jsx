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
                       outline:"solid 3px white",
                       borderRadius:"50%",
                       position:"relative",
                       left:"30px",
                       top:"30px"
                    }}/>

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