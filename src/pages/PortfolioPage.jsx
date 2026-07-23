// import ProjectsCarousel from '../components/portfolio/ProjectsCarousel'
// Página de proyectos: lista de proyectos con imagen/título/descripcion y enlaces (GitHub o demo).

import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';

import { useState, useEffect } from 'react';


// Handler de estado de pantalla
function useIsMobile(breakpoint = 768) {

    // estado de pantalla - false inicial si pantalla desktop
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
        // cambiar estado de pantalla
        const handler = () => setIsMobile(window.innerWidth < breakpoint);

        // evento resize - cambiar estado de pantalla
        window.addEventListener('resize', handler);        
        // limpieza de listeners
        return () => window.removeEventListener('resize', handler);
    
    }, [breakpoint]); // aplicado cuando el breakpoint cambie

    // devuelve estado
    return isMobile;
}

// Divide un array en grupos de subarrays, según pantalla
function divideArray(arr, size) {
    const result = [];

    // i +=size -- el indice salta de size en size
    for (let i = 0; i < arr.length; i += size) {
        // slice(inicio, fin) -- extrae una parte del array sin incluir el índice final
        result.push(arr.slice(i, i + size));
    }

    // resultDesktop = [ 
    //  [{...}, {...}], [{...}, {...}] 
    // ]
    // resultMobile = [ 
    //  [{...}], [{...}] 
    // ]
    return result;
}

// Render
function PortfolioPage () {

    // actualiza estado
    const isMobile = useIsMobile();

    // máximas cards cargadas en cada página del carousel
    // desktop/tablet - 2, mobile - 1
    let maxCards = !isMobile ? 2 : 1;

    // **datos
    let portfolioInfo = [
        {
            image:"background.png", title:"Proyecto 1", category:"Web App", description:"Descripción del proyecto 1.", 
            tags:["Etiqueta","Etiqueta","Etiqueta","Etiqueta"], link:"#" 
        },
        {
            image:"background.png", title:"Proyecto 2", category:"Web App", description:"Descripción del proyecto 2.", 
            tags:["Etiqueta","Etiqueta","Etiqueta","Etiqueta"], link:"#" 
        },
        {
            image:"background.png", title:"Proyecto 3", category:"Web App", description:"Descripción del proyecto 3.", 
            tags:["Etiqueta","Etiqueta","Etiqueta","Etiqueta"], link:"#" 
        },
    ];

    let cardGroups = divideArray(portfolioInfo, maxCards);
    

    return(
        <div className="container-page portfolio">

            {/* PortfolioTablist.jsx */}
            {/* TODO. MOBILE VERSION SE TRANSFROMA EN UN SELECT */}
            <nav className="tablist">
                <button type="button" id="tab-todos" className="selected">Todos</button>
                <button type="button" id="tab-web-app">Web App</button>
                <button type="button" id="tab-back">Backend</button>
                <button type="button" id="tab-front">Frontend</button>
                <button type="button" id="tab-otros">Otros</button>
            </nav>

            {/* PortfolioTablist.jsx */}
            <section className="tabpanel" id="panel-todos">
                
                {/* CarouselCards.jsx */}

                {/* 
                key={maxCards} para que cada vez que maxCards cambia (de 2 a 1 o viceversa), 
                React trate el <Carousel> como un componente completamente nuevo: lo desmonta y lo vuelve 
                a montar, reseteando su activeIndex a 0 automáticamente.
                */}
                <Carousel interval={null} key={maxCards}>

                    
                    {cardGroups.map((group, i) => (
                        
                    // grupo de array 1
                    <Carousel.Item key={i}>

                        <div className="carousel-cards">
                        {group.map((card, j)=>(
                            <Card key={j}>
                                <Card.Img variant="top" src={`${import.meta.env.BASE_URL}images/${card.image}`} />

                                <Card.Body>
                                    <div className="head">
                                        <h5>{card.title}</h5>
                                        <p className='category'>{card.category}</p>
                                    </div>

                                    <div className="content">
                                        <Card.Text>
                                            {card.description}
                                        </Card.Text>

                                        <p className="tags">
                                            {/* aplicar separador "·" en cada string */}
                                            {card.tags.join(' · ')}
                                        </p>
                                        
                                        <Card.Link href={card.link}>
                                            <span>Ver proyecto</span>
                                            <i className="bi bi-arrow-right-short"></i>
                                        </Card.Link>
                                    </div>

                                </Card.Body>
                            </Card>
                        ))}
                        </div>
                    </Carousel.Item>
                    ))} 

                    {/* <Carousel.Item>
                        <div className="carousel-cards">

                            <Card>
                                <Card.Img variant="top" src={`${import.meta.env.BASE_URL}images/background.png`} />
                                <Card.Body>

                                    <div className="head">
                                        <h5>Proyecto 1</h5>
                                        <p className='category'>Web App</p>
                                    </div>

                                    <div className="content">
                                        <Card.Text>
                                            Descripción del proyecto 1. 
                                            Descripción del proyecto 1.
                                        </Card.Text>

                                        <p className="tags">Etiqueta · Etiqueta · Etiqueta · Etiqueta</p>
                                        
                                        <Card.Link href="#">
                                            <span>Ver proyecto</span>
                                            <i className="bi bi-arrow-right-short"></i>
                                        </Card.Link>
                                    </div>

                                </Card.Body>
                            </Card>

                            <Card>
                            <Card.Img variant="top" src={`${import.meta.env.BASE_URL}images/background.png`} />
                            <Card.Body>
                                <Card.Title>Producto 1</Card.Title>
                                <Card.Text>Descripción del producto 1.</Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="carousel-cards">
                            <Card>
                            <Card.Img variant="top" src={`${import.meta.env.BASE_URL}images/background.png`} />
                            <Card.Body>
                                <Card.Title>Producto 1</Card.Title>
                                <Card.Text>Descripción del producto 1.</Card.Text>
                            </Card.Body>
                            </Card>

                            <Card>
                            <Card.Img variant="top" src={`${import.meta.env.BASE_URL}images/background.png`} />
                            <Card.Body>
                                <Card.Title>Producto 1</Card.Title>
                                <Card.Text>Descripción del producto 1.</Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item> */}
                </Carousel>

            </section>

            <section className="tabpanel" id="panel-web-app">

            </section>

            <section className="tabpanel" id="panel-back">

            </section>

            <section className="tabpanel" id="panel-front">

            </section>

            <section className="tabpanel" id="panel-otros">

            </section>

            {/* <div className="section aligned"> */}
            {/* <section> */}
                {/* <h2>Proyectos</h2> */}
                {/* <p>Proyectos realizados durante mi formación. Cada uno enfocado en practicar una habilidad concreta.</p> */}
                {/* <ProjectsCarousel /> */}
            {/* </section> */}
        </div>
    );
} 
export default PortfolioPage;