// CarouselProjects.jsx:
// - carga los projects.json en cada ProjectCard.jsx
// - imprime los ProjectCard.jsx en un carousel
// * LOS NOMBRES DE LOS ATRIBUTOS JSON DEBEN COINCIDIR CON 
//   LOS NOMBRES DE LOS PROPS DEL ProjectCard.jsx


import { useState } from 'react'; // state para carousel
import Carousel from 'react-bootstrap/Carousel'; // caraousel de bootstrap react

import projects from '../../data/portfolio/projects.json';   // json
import ProjectCard from '../ProjectCard';    // cards con info del json
import ViewProjectButton from '../ViewProjectButton';    // cards con info del json

function ProjectsCarousel() {
    // index es la variable que cambia de estado
    // setIndex es la función que cambia el estado de index 
    const [index, setIndex] = useState(0); 

    // handle es función encargada de reaccionar a eventos del 
    // usuario o cambios en el estado, dentro de componentes 
    // para manejar la lógica interactiva
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // para que el ViewProjectButton obtenga el proyecto actualmente visible
    // dentro del carousel
    const currentProjectLink = projects[index].link;

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>

                {/* por cada proyecto se carga un item de carousel */}
                {projects.map((project) => (
                    // cada item contiene id de proyecto y su card
                    // cada card obtiene los valores del proyecto en el json 
                    <Carousel.Item key={project.id}>
                        <ProjectCard {...project} />
                    </Carousel.Item>
                ))}

            </Carousel>
            
            <ViewProjectButton projectLink={currentProjectLink} />
        </>
    );
}

export default ProjectsCarousel;