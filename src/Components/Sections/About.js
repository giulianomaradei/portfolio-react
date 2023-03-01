import './About.css';
import perfil from  '../../Assets/perfil.png';

function About(){
    return(
        <div id='about'>
            <img className='image' src={perfil} alt="eu"></img>
            <div className='info'>Meu nome é Giuliano Maradei, sou estudante do curso de Sistemas da Informação na UFU e de desenvolvimento Full-Stack. Amo cirar sites e aplicações, lidar com problemas logicos e algoritmos complexos</div>
        </div>
    )
}

export default About;