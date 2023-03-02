import React,{useState} from 'react';
import Section from '../UI/Section';
import './Contact.css';

import copy_button from '../../Assets/UI/copy_button.png';
import check_button from '../../Assets/UI/check_button.png';

import linkedin_logo from '../../Assets/Logos/linkedin_logo.png';
import github_logo from '../../Assets/Logos/github_logo.png';

function Contact(){

    const [emailButton,setEmailButton] = useState(copy_button);
    const [phoneButton,setPhoneButton] = useState(copy_button);
    

    function copyToClipboard(event){
        if(event.target.id === "email"){
            navigator.clipboard.writeText("giulianomaradei@gmail.com");
            setEmailButton(check_button);
            setTimeout(()=>{
                setEmailButton(copy_button)
            },2000);
        }else{
            navigator.clipboard.writeText("+5534998697052");
            setPhoneButton(check_button);
            setTimeout(()=>{
                setPhoneButton(copy_button)
            },2000);
        }
        
    }


    return(
        <Section id="contact">
            <div className='contact-title'>Contato</div>
            <div className='contact-container'>
                <div className='email-phone'>
                    <div className='contact-line'>
                        <div><strong>E-mail:</strong> giulianomaradei@gmail.com</div>
                        <button onClick={copyToClipboard}>
                            <img id='email' src={emailButton} className="copy-button" alt="copy_button"></img>
                        </button>
                        
                    </div>
                    <div className='contact-line'>
                        <div ><strong>Fone:</strong> +55 34 99869-7052</div>
                        <button onClick={copyToClipboard}>
                            <img id='phone' src={phoneButton} className="copy-button" alt="copy_button"></img>
                        </button>
                    </div>
                </div>

                <div className='social-media'>
                    <a href='https://www.linkedin.com/in/giuliano-maradei-3a60271b1/' target="_blank"><img src={linkedin_logo} alt="linkedin_logo"></img></a>
                   <a href='https://github.com/giulianomaradei' target="_blank"><img src={github_logo} alt="github_logo"></img></a>
                </div>
            </div>
        </Section>
    )
}

export default Contact;