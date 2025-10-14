import './sub-hero.scss';

//DarkMode
import { useDarkMode } from '../../context/DarkModeContext';

function SubHero () {
    const { darkMode } = useDarkMode();

    return (
            <div className={`sub-hero-section ${darkMode? 'light' : 'dark'}`}>
                <div className='container' style={{
                    borderTopLeftRadius:"0px",
                    borderBottomLeftRadius:"0px",
                }}>
                    <p>2</p>
                    <span>Years of Experience</span>
                </div>
                <div className='container'>
                    <p>3</p>
                    <span>Projects Completed</span>
                </div>
                <div className='container' style={{
                    borderTopRightRadius:"0px",
                    borderBottomRightRadius:"0px",
                }}>
                    <p>13</p>
                    <span>Technology Stack</span>
                </div>
            </div>
    )
}

export default SubHero;