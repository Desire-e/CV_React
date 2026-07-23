// import ButtonScroll from "../../reusables/ButtonScroll";

function PortfolioIntro() {
    return (
        <div className="portfolio intro-container">

            <div className='content'>

                <p className="pretitle" style={{color:"var(--accent-color)"}}>MIS PROYECTOS</p>
    
                <h1>Portfolio</h1>
    
                <p className="description">
                    Algunas de las tareas prácticas realizadas durante mi formación, 
                    que muestran mis habilidades como desarrolladora
                </p>
    
            </div>

            {/* <ButtonScroll scrollDown={true} position='#contents'/> */}

        </div>
    );
}
export default PortfolioIntro;