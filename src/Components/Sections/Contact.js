import Section from '../UI/Section';
import './Contact.css';

function Contact(){
    return(
        <Section id="contact">
            <div className='contact-title'>Contato</div>
            <div className='contact-container'>
                <div className='email-phone'>
                    <div>Email: giulianomaradei@gmail.com</div>
                    <div>Phone: +55 34 99869-7052</div>
                </div>
                <div className='social-media'>teste</div>
            </div>
        </Section>
    )
}

export default Contact;