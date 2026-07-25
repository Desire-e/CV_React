/**
 * Grupos de card horizontal, usado en Skills
 */

import './CardsStack.css';

function CardsStack({data = []}){

    return(
        <div className="cards-groups-container">

            {data.map((group, i) => (

            <div className="card-vertical" 
            key={`GRP-${i}`}>
                <article className="card-vertical-head">
                    <div className="icon">
                        <i className={group.groupHead.icon}></i>
                    </div>
                    <div className="title">
                        <h3>{group.groupHead.title}</h3>
                    </div>
                </article>


                <div className="card-vertical-content">
                    
                    {group.groupCards.map((card, j) => (
                    
                    <div className="card-vertical-item"
                    key={`CRD-${j}`}>
                        <img src={`${import.meta.env.BASE_URL}images/${card.image}`} alt="" />
                        <span>{card.description}</span>
                    </div>
                    
                    ))}

                </div>

            </div>                  

            ))}
    
        </div>
    );
} 
export default CardsStack;