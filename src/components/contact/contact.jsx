import './contact.css';

//assets
import Send from '../../assets/Email Send.svg';
import Email from '../../assets/Email.svg';
import Phone from '../../assets/Phone.svg';
import Location from '../../assets/Address.svg';

function Contact () {
    return (
        <div className='contact-section' id="contact">
            <div className='contact-information'>
                <div className='contact-header'>
                    <h1>Let's get in Touch!</h1>
                    <p>Want me to be part of your next project?</p>
                </div>
                <div className='contact-details'>
                    <p><img src={Email} alt='email'/>evanepacot2002@gmail.com</p>
                    <p><img src={Phone} alt='phone'/>(+63)947-631-8165</p>
                    <p><img src={Location} alt='location'/>City of Imus, Cavite Philippines</p>
                </div>
            </div>
            <form className='contact-form'>
                <div className='form-name'>
                    <input type="text" placeholder=" " required/>
                    <label>Name</label>
                </div>
                <div className='form-email'>
                    <input type="text" placeholder=" " required/>
                    <label>Email</label>
                </div>
                <textarea className="form-message" placeholder="Your Message Here ..." required/>
                <button type="submit"><img src={Send} />Submit</button>
            </form>
        </div>
    )
}

export default Contact; 