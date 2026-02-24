/* Props:
Los props con states compartidos entre varios componentes, para que se actualicen siempre en conjunto.
Funcionamiento: se mueve el state de un componenete individual “hacia arriba” al componente más cercano 
que los contiene a todos, luego el componente contenedor mueve el state hacia abajo a todos los componentes 
que contiene. Los props son la información / estado pasada por el componente contenedor hacia abajo.
*/
// - los props son los parametros que recibe la funcion
// - con los props, rellena los campos


// cards individuales de cada proyecto contenido en el carousel del portfolio
function ProjectCard({ title, description, image, link, tags }) {
    return (
        <div className="project-card">
        
            <div className="project-image"> 
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <img src={image} alt={title} />
                </a>
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>

                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>

        </div>
  );
}

export default ProjectCard;

// Se puede usar llamando al componente y pasando valores concretos:
// <ProjectCard
//   title="..."
//   description="..."
//   image="..."
//   link="..."
//   tags="..."
// />

// O se puede usar llamando al componente y pasando valores 
// de array de objetos / json: ver ProjectsCarousel.jsx