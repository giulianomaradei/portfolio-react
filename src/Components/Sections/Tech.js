import './Tech.css';
import Section from '../UI/Section.js';

import html_logo from '../../Assets/Logos/html_logo.png';
import css_logo from '../../Assets/Logos/css_logo.png';
import js_logo from '../../Assets/Logos/js_logo.png';
import react_logo from '../../Assets/Logos/react_logo.png';
import node_logo from '../../Assets/Logos/node_logo.png';
import sql_logo from '../../Assets/Logos/sql_logo.png';
import c_logo from '../../Assets/Logos/c_logo.png';
import cpp_logo from '../../Assets/Logos/cpp_logo.png';
import haskell_logo from '../../Assets/Logos/haskell_logo.png';



function Tech(){
    return(
        <Section id="tech">
            <h1 className='tech-title'>Tecnologias</h1>
            <div className='technologies'>
                <div className='tech-area'>
                    <div className='tech-area__title'>Front-End</div>
                    <div className='tech-area__items'>
                        <div className='tech-item'>
                            <div className='tech-item__title'>HTML</div>
                            <img src={html_logo} className='tech-item__img' alt="html_logo"></img>
                        </div>
                        <div className='tech-item'>
                            <div className='tech-item__title'>CSS</div>
                            <img src={css_logo} className='tech-item__img' alt="css_logo"></img>
                        </div>
                        <div className='tech-item'>
                            <div className='tech-item__title'>JS</div>
                            <img src={js_logo} className='tech-item__img' alt="js_logo"></img>
                        </div>
                        <div className='tech-item'>
                            <div className='tech-item__title'>React</div>
                            <img src={react_logo} className='tech-item__img' alt="react_logo"></img>
                        </div>
                    </div>
                </div>

                <div className='tech-area'>
                    <div className='tech-area__title'>Back-End</div>
                    <div className='tech-area__items'>
                        <div className='tech-item'>
                            <div className='tech-item__title'>Node.js</div>
                            <img src={node_logo} className='tech-item__img' alt="node_logo"></img>
                        </div>
                    </div>
                </div>

                <div className='tech-area'>
                    <div className='tech-area__title'>Databases</div>
                    <div className='tech-area__items'>
                        <div className='tech-item'>
                            <div className='tech-item__title'>SQL</div>
                            <img src={sql_logo} className='tech-item__img' alt="sql_logo"></img>
                        </div>
                    </div>
                </div>

                <div className='tech-area'>
                    <div className='tech-area__title'>Outros</div>
                    <div className='tech-area__items'>
                        <div className='tech-item'>
                            <div className='tech-item__title'>C</div>
                            <img src={c_logo} className='tech-item__img' alt="c_logo"></img>
                        </div>

                        <div className='tech-item'>
                            <div className='tech-item__title'>C++</div>
                            <img src={cpp_logo} className='tech-item__img' alt="cpp_logo"></img>
                        </div>

                        <div className='tech-item'>
                            <div className='tech-item__title'>Haskell</div>
                            <img src={haskell_logo} className='tech-item__img' alt="haskell_logo"></img>
                        </div>
                    </div>
                </div>
               
            </div>
        </Section>
    )
}

export default Tech;