import Experiences from '../components/experience/Experiences'
import Collaborations from '../components/experience/Collaborations'
import Formations from '../components/experience/Formations'

function ExperiencePage () {
    return(
        <div className="container-page">
            {/* <div className="section"> */}
            <section>
                <h2>Proyectos personales</h2>
                <div className="subsection cards-column">
                    <Experiences />
                </div>
            </section>

            {/* <div className="section"> */}
            <section>
                <h2>Colaboraciones</h2>
                <div className="subsection cards-column">
                    <Collaborations />
                </div>
            </section>


            {/* <div className="section"> */}
            <section>
                <h2>Formación</h2>
                <div className="subsection dropdown">
                    <Formations />
                </div>
            </section>

        </div>
    );
} 
export default ExperiencePage;