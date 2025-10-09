import './insight.css';

//assets
import desktopInsight from '../../assets/desktop-insight.jpg';
import mobileInsight from '../../assets/mobile-insight.jpg';

function Insight () {
    return (
        <div className='insight-section'>
            <div className='insight-details'>
                <p>My personal website portfolio has achieved a performance score of <span>90</span> on mobile and <span>99</span> on desktop as evaluated by Google PageSpeed Insights, reflecting a high level of optimization and responsiveness across platforms.</p>
            </div>
            <div className='insight-image'>
                <img src={desktopInsight} alt="Dekstop Insight" loading='lazy' />
                <img src={mobileInsight} alt="Mobile Insight" loading='lazy' />
            </div>
        </div>
    )
}

export default Insight;