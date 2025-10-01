import './hero.css';
import Logo from '../../assets/pacot-logo.svg';
import Model from '../../assets/pacot-model.png';

function Hero () {
    return (
        <>
            <div className='hero-section'>

                <h1>Hi! I'm Evane Pacot</h1>
                <p style={{
                    textAlign:"center",
                    color:"rgba(255,255,255,0.6)",
                }}>I specialize in Front-End Development</p>
                <button>About Me</button>

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