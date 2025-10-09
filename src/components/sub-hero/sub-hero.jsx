import './sub-hero.css';

function SubHero () {
    return (
        <>
            <div className='sub-hero-section'>
                <div className='container' style={{
                    borderTopLeftRadius:"0px",
                    borderBottomLeftRadius:"0px",
                }}>
                    <p>2</p>
                    <span>Years of Experience</span>
                </div>
                <div className='container'>
                    <p>2</p>
                    <span>Projects Completed</span>
                </div>
                <div className='container' style={{
                    borderTopRightRadius:"0px",
                    borderBottomRightRadius:"0px",
                }}>
                    <p>8</p>
                    <span>Technology Stack</span>
                </div>
            </div>
        </>
    )
}

export default SubHero;