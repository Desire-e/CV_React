// import foto from '../../public/images/foto.jpeg';

function About () {
    return (
        <div className="about-container">
            <img src={`${import.meta.env.BASE_URL}images/foto.jpeg`} className="about-image" alt="Foto profesional"/>

            <p>
                Soy una desarrolladora de aplicaciones web junior en su penúltimo año de Formación Profesional de Grado 
                Superior en Desarrollo de Aplicaciones Web. Cuento con una sólida base Frontend y Backend para comenzar.
            </p>
            <p>
                ¿Qué me diferencia? mi capacidad de aprendizaje, trabajo en equipo y orientación a la mejora continua, 
                tratando de ir más allá de un código meramente funcional, sino que además aporte soluciones óptimas, 
                mantenibles y escalables.
            </p>
            <p>
                Busco mi primera oportunidad profesional para aplicar mis conocimientos técnicos, seguir creciendo 
                y aportar valor en proyectos web.
            </p>
        </div>
    );      
}

export default About;

