import './sub-hero.scss';

//DarkMode
import { useDarkMode } from '../../context/DarkModeContext';

function SubHero () {
    const { darkMode } = useDarkMode();

    return (
            <div className={`sub-hero-section ${darkMode? 'light' : 'dark'}`}>
                <div className='container'>
                    <p>2</p>
                    <span>Years of Experience</span>
                </div>
                <div className='container'>
                    <p>3</p>
                    <span>Projects Developed</span>
                </div>
                <div className='container'>
                    <p>17</p>
                    <span>Technology Stack</span>
                </div>
            </div>
    )
}

export default SubHero;