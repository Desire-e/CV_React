// componentes de React Bootstrap


import Skills from '../components/landing/Skills';
import ContactButtons from '../components/landing/ContactButtons';
import About from '../components/landing/About';

function LandingPage () {
    return(
        // TODO. Animación abajo-arriba, con opacity 0 - 1 ; para cada section
        // TODO. Animacion de carga al entrar


        // <div className="containerPage">
        <div className="container-page">
            {/* <div className="section"> */}
            <section>
                <About />
            </section>


            <section>
                {/* <h2>Habilidades</h2> */}
                
                {/* <div className="subsection row"> */}
                    <Skills />
                {/* </div> */}
            </section>


            {/* <section className="aligned">

                <h2>Buscando crecimiento profesional</h2>
                
                <p>Si quieres alguien comprometido y responsable, determinado a crecer en el sector...</p>
                
                <div className="subsection row">
                    <ContactButtons />
                </div>
            </section>      */}

        </div>
    );
} 
export default LandingPage;