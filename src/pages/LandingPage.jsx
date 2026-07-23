import Skills from '../components/landing/Skills';
// import ContactButtons from '../components/landing/ContactButtons - delete';
import About from '../components/landing/About';

function LandingPage () {
    return(
        <div className="container-page landing">
            <section>
                <About />
            </section>


            <section>
                {/* <h2>Habilidades</h2> */}
                
                {/* <div className="subsection row"> */}
                    <Skills />
                {/* </div> */}
            </section>

        </div>
    );
} 
export default LandingPage;