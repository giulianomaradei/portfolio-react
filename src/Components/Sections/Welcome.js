import './Welcome.css';
import Section from '../UI/Section.js';

function Welcome(){
    return(
        <Section id="welcome">
            <div>
                <h1 className='name'>Giuliano Maradei</h1>
                <span className='name-info'>Ser humano e desenvolvedor Full-Stack </span>
            </div>
        </Section>
    )
}

export default Welcome;