import './footer.css';

//assets
import Logo from '../../assets/pacot-logo-colored.svg';

function Footer () {
    return (
        <>
            <div className='footer-section'>
                <a href="#home" className='footer-logo'>
                    <img src={Logo} alt="Pacot Logo" />
                    <span style={{fontSize:"2rem"}}>PACOT</span>
                </a>
                <p className="footer-ownership" style={{
                    textAlign:"center",
                    color:"white",
                    }}
                >© Evane Pacot 2025, All rights reserved. Icons by <a href="" target="_blank" style={{textDecoration:"none", color:"white", fontWeight:"800"}}>Icons8</a></p>
            </div>
        </>
    )
}

export default Footer;