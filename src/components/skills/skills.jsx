import './skills.css';

//assets
import Business from '../../assets/Business.png';
import Stack from '../../assets/Layers.png';
import Bulb from '../../assets/bulb.png';

//misc
import React from '../../assets/misc/React.svg';
import VisualStudio from '../../assets/misc/Visual Studio.svg';
import JavaScript from '../../assets/misc/JavaScript.svg';
import HTML5 from '../../assets/misc/Html 5.svg';
import GitHub from '../../assets/misc/GitHub.svg';
import Figma from '../../assets/misc/Figma.svg';
import CSS3 from '../../assets/misc/CSS3.svg';
import Canva from '../../assets/misc/Canva.svg';

function Skills () {
    return (
        <>
            <div className='skills-section-grid' id="skills">
                <div className='experience'>
                    <p><img src={Business}/>Experience</p>

                </div>
                <div className='tech-stack'>
                    <p><img src={Stack}/>Tech Stack</p>
                    <div className='tech-tools'>
                        <img src={React}/>
                        <img src={JavaScript}/>
                        <img src={HTML5}/>
                        <img src={CSS3}/>
                        <img src={GitHub}/>
                        <img src={Figma}/>
                        <img src={VisualStudio}/>
                        <img src={Canva}/>
                    </div>
                </div>
                <div className='skills'>
                    <p><img src={Bulb}/>Skills</p>

                </div>
            </div>
        </>
    )
}

export default Skills;