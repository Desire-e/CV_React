import ProjectsCarousel from '../components/portfolio/ProjectsCarousel'
// Página de proyectos: lista de proyectos con imagen/título/descripcion y enlaces (GitHub o demo).

function PortfolioPage () {
    return(
        <div className="containerPage">
            <div className="section aligned">
                <h2>Proyectos</h2>
                <p>Proyectos realizados durante mi formación. Cada uno enfocado en practicar una habilidad concreta.</p>
                <ProjectsCarousel />
            </div>
        </div>
    );
} 
export default PortfolioPage;