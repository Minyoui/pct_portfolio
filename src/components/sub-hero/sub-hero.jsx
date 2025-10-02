import './sub-hero.css';

function SubHero () {
    return (
        <>
            <div className='sub-hero-section'>
                <div className='container' style={{
                    borderTopLeftRadius:"0px",
                    borderBottomLeftRadius:"0px",
                }}>
                    <p>1.5</p>
                    <h3>Years of Experience</h3>
                </div>
                <div className='container'>
                    <p>2</p>
                    <h3>Projects Completed</h3>
                </div>
                <div className='container' style={{
                    borderTopRightRadius:"0px",
                    borderBottomRightRadius:"0px",
                }}>
                    <p>8</p>
                    <h3>Technology Stack</h3>
                </div>
            </div>
        </>
    )
}

export default SubHero;