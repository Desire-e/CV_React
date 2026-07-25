import './PortfolioTabPanel.css';
import portfolioInfo from '../../../data/portfolio/projects.json'

import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';



// ------------------------------------------------------
// Divide un array en grupos de subarrays, según pantalla
// ------------------------------------------------------
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



function PortfolioTabPanel({isMobile = false, tabSelected = ''}){
    
    // máximas cards cargadas en cada página del carousel
    // desktop/tablet - 2, mobile - 1
    let maxCards = !isMobile ? 2 : 1;

    // filtra primero según la pestaña seleccionada
    let filteredInfo = tabSelected === 'todos'
        ? portfolioInfo
        : portfolioInfo.filter(card => card.categoryId === tabSelected);

    // obtiene los grupos de arrays
    let cardGroups = divideArray(filteredInfo, maxCards);


    return(
        <>
            <section className="tabpanel" id="panel-todos">
                
                {/* 
                key={maxCards} para que cada vez que maxCards cambia (de 2 a 1 o viceversa), 
                React trate el <Carousel> como un componente completamente nuevo: lo desmonta y lo vuelve 
                a montar, reseteando su activeIndex a 0 automáticamente.
                */}
                <Carousel interval={null} key={`${maxCards}-${tabSelected}`}>
                    {cardGroups.map((group, i) => (
                        
                    // grupo de array 1
                    <Carousel.Item key={i}>

                        <div className="carousel-cards">
                        {group.map((card, j) => (
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

                </Carousel>

            </section>
        </>

    );
}
export default PortfolioTabPanel;