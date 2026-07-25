import './XIntro.css';

import Button from 'react-bootstrap/Button';
import ButtonCta from '../../reusables/ButtonCta';
import ButtonScroll from '../../reusables/ButtonScroll';

import DustParticlesAnimation from './DustParticlesAnimation';

function HeroLanding() {
    return (
    
        <div className="landing intro-container">
    
            <DustParticlesAnimation />

            <div className='content'>
                <p id="greetings" style={{color:"var(--accent-color)"}}>¡Buenas! Soy</p>

                <h1 id="name">Desirée Rueda Torres</h1>

                <p id="role" style={{color:"var(--accent-color)"}}>Desarrolladora Web Junior</p>
                
                <p id="slogan">En formación, flexible y enfocada en el desarrollo backend.</p>


                <div className='buttons'>
                    <ButtonCta route="/portfolio" id="my-projects-btn">
                        Mis proyectos
                        <i className="bi bi-arrow-right-short"></i>
                    </ButtonCta>

                    <Button variant="outline-primary" id="about-me-btn" href="#contents" size="lg">Sobre mí</Button>
                </div>
            </div>


            <ButtonScroll scrollDown={true} position='#contents'/>
        </div>
    );
}
export default HeroLanding;