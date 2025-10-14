import './about.css';

//assets
import Model from '../../assets/pacot-model-two.png';
import ModelOne from '../../assets/pacot-model-three.avif';
import ModelTwo from '../../assets/pacot-model-four.avif';

import Info from '../../assets/Info.png';

function About () {
    const expertise = [
        'HTML5 & CSS3 Expertise',
        "Performance Optimization",
        "Responsive Web Design"
    ];

    return (
        <>
            <div className='about-section' id="about">
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
                        textAlign:"left",
                        fontSize:"1.5rem",
                        color:"#9c9c9cff"
                    }}>Through my diverse experiences, I have cultivated a strong work ethic and an eagerness to learn and adapt to new challenges. My goal is to contribute meaningfully to projects that blend innovation, aesthetic and functionality. I thrive in environments where I can collaborate with others and continue to grow as a professional.</p>
                    <p style={{fontWeight:"bold",fontSize:"1.2rem"}}>Key Expertise</p>

                    <div className='key-expertise'>
                        {expertise.map((index) => (
                            <div className='tab-value' key={index} style={{
                                backgroundColor:"#2B2B2B",
                            }}>
                                <div style={{height:"10px",width:"10px", backgroundColor:"rgba(25,25,25)",borderRadius:"100px"}}/>
                                {index}
                            </div>
                        ))}
                    </div>

                </div>
                <img src={Model} alt="Profile Photo" loading='lazy'
                    style={{
                        outline:"solid 5px white",
                        borderRadius:"100%",
                    }} className='profile'/> 
            </div>
        </>
    )
}

export default About;