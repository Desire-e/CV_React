// componentes de React Bootstrap


import CardSkills from '../components/landing/CardSkills';
import ContactButtons from '../components/landing/ContactButtons';
import About from '../components/landing/About';

function LandingPage () {
    return(
        <div className="containerPage">
            <div className="section">
                <h2>Sobre mí</h2>
                <About />
            </div>


            <div className="section">
                <h2>Habilidades</h2>
                <div className="subsection row">
                    <CardSkills />
                </div>
            </div>

            <div className="section aligned">
                <h2>Buscando crecimiento profesional</h2>
                <p>Si quieres alguien comprometido y responsable, determinado a crecer en el sector...</p>
                <div className="subsection row">
                    <ContactButtons />
                </div>
            </div>     

        </div>
    );
} 
export default LandingPage;