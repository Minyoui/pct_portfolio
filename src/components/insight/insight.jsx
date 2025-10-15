import './insight.scss';
import { useState, useEffect, useRef } from 'react';

//DarkMode
import { useDarkMode } from '../../context/DarkModeContext';

//assets
import desktopInsight from '../../assets/desktop-insight.jpg';
import mobileInsight from '../../assets/mobile-insight.jpg';

//icons 
import Approval from '../../assets/Approval.svg';
import MultipleDevice from '../../assets/Multiple Devices.svg';

function Google () {
    return (
        <span>
            <span style={{color:"#5887ED"}}>G</span>
            <span style={{color:"#D95645"}}>o</span>
            <span style={{color:"#F1C147"}}>o</span>
            <span style={{color:"#5887ED"}}>g</span>
            <span style={{color:"#5DA961"}}>l</span>
            <span style={{color:"#D95645"}}>e</span>
        </span>
    )
};

function Insight () {
    const [isVisible, setIsVisible] = useState(false);
    const { darkMode } = useDarkMode();
    const ref = useRef(null);

    useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry.isIntersecting);
                },
                { threshold: 0.1 }
            );
    
            if (ref.current) {
                observer.observe(ref.current);
            }
    
            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, []);

    return (
        <div className={`insight-section ${darkMode? 'light':'dark'}`} ref={ref}>
            <div className={`insight-details ${isVisible? 'animate':''}`}>
                <p>My personal website portfolio has achieved a performance score of <span style={{color:"#eebf5bff"}}>76</span> on mobile and <span style={{color:"#8BC34A"}}>96</span> on desktop as evaluated by <Google /> PageSpeed Insights, reflecting a high level of optimization and responsiveness across different platforms.</p>
                <div className={`insight-tags ${isVisible? 'animate':''}`}>
                    <div className='multiple-devices'>
                        <img src={MultipleDevice} alt='Multiple Devices Icon' loading='lazy'/>
                        <p>Responsive</p>
                    </div>
                    <div className='approval'>
                        <img src={Approval} alt="Approval Icon" loading='lazy' />
                        <p>Optimized</p>
                    </div>
                </div>
            </div>
            <div className={`insight-image ${isVisible? 'animate':''}`}>
                <img src={desktopInsight} alt="Dekstop Insight" loading='lazy' />
                <img src={mobileInsight} alt="Mobile Insight" loading='lazy' />
            </div>
        </div>
    )
}

export default Insight;