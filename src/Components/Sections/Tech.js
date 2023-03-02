import './Tech.css';
import Section from '../UI/Section.js';

import c_logo from '../../Assets/Logos/c_logo.png';

function Tech(){
    return(
        <Section id="tech">
            <div>
                <h1>Tecnologias</h1>
                <div className='technologies'>
                    <div className='tech-area'>
                        <div className='tech-area__title'>Front-End</div>
                        <div className='tech-area__items'>
                            <div className='tech-item'>
                                <img src={c_logo} className='tech-item__img' alt="c_logo"></img>
                                <div className='tech-item__title'>CSS</div>
                            </div>

                        </div>
                    </div>
                    <div className='tech-area'>
                        teste
                    </div>
                    <div className='tech-area'>
                        teste
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Tech;