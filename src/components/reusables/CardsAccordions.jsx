/* ****************************************
 * Desktop, Tablet - Agrupación de cards
 * Mobile - Listado / Accordion 
 * ****************************************/


function CardsAccordions({cardsHead = {}, cardsBody = []}){

    return(
        <div className="cards-section">
            <article className="cards-head">
                <div className="icon">
                    <i className={cardsHead.icon}></i>
                </div>
                
                <h3>{cardsHead.title}</h3>
            </article>

            <div className="cards-group">

                {cardsBody.map((card, index) => (
                
                <div className="custom-card" key={index}>
                    <img src={`${import.meta.env.BASE_URL}images/${card.image}`} alt="" />
                    <span>{card.description}</span>
                </div>
                
                ))}

            </div>
        </div>
    );
} 
export default CardsAccordions;