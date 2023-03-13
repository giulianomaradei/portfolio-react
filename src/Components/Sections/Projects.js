import Modal from '../UI/Modal';
import Section from '../UI/Section'
import './Projects.css';


function Projects(){
    return(
        <Section id="projects">
            <div className='projects-title'>Projects</div>
            <div className='projects-container'>
                <Modal title="Bateria" image="https://akamai.sscdn.co/uploadfile/letras/fotos/5/d/1/3/5d138386cb0ff237d0f65cd6a9905ab4.jpg" url="https://freefrontend.com/css-button-hover-effects/"></Modal>
                <Modal title="Bateria" image="https://akamai.sscdn.co/uploadfile/letras/fotos/5/d/1/3/5d138386cb0ff237d0f65cd6a9905ab4.jpg"></Modal>
                <Modal title="Bateria" image="https://akamai.sscdn.co/uploadfile/letras/fotos/5/d/1/3/5d138386cb0ff237d0f65cd6a9905ab4.jpg"></Modal>
            </div>
        </Section>
        
    )
}

export default Projects;