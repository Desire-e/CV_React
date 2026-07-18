// import foto from '../../public/images/foto.jpeg';
import Button from 'react-bootstrap/Button';

function About () {
    return (
        // <div className="about-container">
        <div className="contenido about-me">

            <div className="letter">
                <h2>Sobre mí</h2>

                <p>
                    Soy desarrolladora de aplicaciones web junior, actualmente cursando el último año del Ciclo 
                    Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW). He adquirido una sólida base 
                    en tecnologías frontend y backend,
                </p>
                <p>
                    Me considero una persona con gran capacidad de aprendizaje, orientada al trabajo en equipo y 
                    comprometida con la mejora continua. Me gusta desarrollar aplicaciones que no solo funcionen 
                    correctamente, sino que también sean mantenibles, escalables y aporten soluciones de calidad.
                </p>
                <p>
                    Actualmente busco mi primera oportunidad profesional para poner en práctica mis conocimientos, 
                    seguir creciendo como desarrolladora y contribuir con ilusión y responsabilidad a proyectos web 
                    reales.
                </p>

                <Button variant="outline-primary" id="about-me-btn" href="#skills" size="md">Ver más</Button>

            </div>
            <div className="image">
                <img src={`${import.meta.env.BASE_URL}images/foto.jpeg`}  
                alt="Foto profesional" className=""/>
            </div>

        </div>
    );      
}

export default About;

