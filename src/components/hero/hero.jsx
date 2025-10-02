import './hero.css';
import CountUp from '../context/countUp/CountUp';

//assets
import Logo from '../../assets/pacot-logo.svg';
import Model from '../../assets/pacot-model.png';


function Hero () {
    return (
        <>
            <div className='hero-section'>

                <h1 className='title'>Hi! I'm Evane Pacot</h1>
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