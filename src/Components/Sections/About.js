import './About.css';
import perfil from  '../../Assets/perfil.jpg';
import Section from '../UI/Section.js';

function About(){
    return(
        <Section id="about">
            <div className='about-title'>Sobre mim</div>
            <div className='about-container'>
                <img className='image' src={perfil} alt="eu"></img>
                <div className='info'>Meu nome é Giuliano Maradei, graduando em Sistemas da Informação na UFU e estudante de desenvolvimento Full-Stack. Amo criar sites e aplicações, lidar com problemas logicos e algoritmos complexos</div>  
            </div>
        </Section>
    )
}

export default About;