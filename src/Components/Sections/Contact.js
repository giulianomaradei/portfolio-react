import Section from '../UI/Section';
import './Contact.css';

import copy_button from '../../Assets/UI/copy_button.png';
/* import linkedin_logo from '../../Assets/Logos/linkedin_logo.png';
import github_logo from '../../Assets/Logos/github_logo.png'; */

function Contact(){
    return(
        <Section id="contact">
            <div className='contact-title'>Contato</div>
            <div className='contact-container'>
                <div className='email-phone'>
                    <div className='contact-line'>
                        <div id='email'>Email: giulianomaradei@gmail.com</div>
                        <img src={copy_button} className="copy-button" alt="copy_button"></img>
                        
                    </div>
                    <div className='contact-line'>
                        <div id='phone'>Phone: +55 34 99869-7052</div>
                        <img src={copy_button} className="copy-button" alt="copy_button"></img>
                    </div>
                </div>
                <div className='social-media'>teste</div>
            </div>
        </Section>
    )
}

export default Contact;