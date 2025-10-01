import './hero.css';
import CountUp from '../context/countUp/CountUp';

//assets
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

                <div className='summary-container'>
                    <div className='summary-box'>
                        <CountUp
                            from={0}
                            to={2}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />
                        <p>Years of Experience</p>
                    </div>
                    <div className='summary-box'>
                        <CountUp
                            from={0}
                            to={2}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />
                        <p>Projects Completed</p>
                    </div>
                    <div className='summary-box'>
                        <CountUp
                            from={0}
                            to={15}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        />
                        <p>Technology Stack</p>
                    </div>
                </div>

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