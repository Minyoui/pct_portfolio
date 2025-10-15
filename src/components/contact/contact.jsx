import './contact.scss';
import { useState, useEffect, useRef } from 'react';

//DarkMode
import { useDarkMode } from '../../context/DarkModeContext';

//assets
import Send from '../../assets/Email Send.svg';
import Email from '../../assets/Email.svg';
import Phone from '../../assets/Phone.svg';
import Location from '../../assets/Address.svg';

function Contact () {
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
        <div className={`contact-section ${darkMode? 'light':'dark'}`} id="contact">
            <div className='contact-information'>
                <div className='contact-header'>
                    <h1>Let's get in Touch!</h1>
                    <p>Want me to be part of your next project?</p>
                </div>
                <div className='contact-details'>
                    <p><img src={Email} alt='email' loading="lazy"/>evanepacot2002@gmail.com</p>
                    <p><img src={Phone} alt='phone' loading="lazy"/>(+63)947-631-8165</p>
                    <p><img src={Location} alt='location' loading="lazy"/>City of Imus, Cavite Philippines</p>
                </div>
            </div>
            <form className={`contact-form ${isVisible? 'animate':''}`} ref={ref}>
                <div className='form-name'>
                    <input type="text" placeholder=" " id="name" required/>
                    <label for="name">Name</label>
                </div>
                <div className='form-email'>
                    <input type="email" placeholder=" " id="email" required/>
                    <label for="email">Email</label>
                </div>
                <textarea className="form-message" placeholder="Your Message Here ..." required/>
                <button type="submit"><img src={Send} alt="send-icon" loading='lazy'/>Submit</button>
            </form>
        </div>
    )
}

export default Contact; 