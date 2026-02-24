/* componente reutilizable */
/* es un card individual */

function CardWide({id, title, description, image, link, tags, colorClass}) {
    return (
        <>
            <div className={`card-item ${colorClass}`} key={id}>
                <div className='card-image'>
                    <img src={image}/>
                </div>
                
                <div className='card-content'>
                    <h4 className='card-title'>{title}</h4>
                    
                    <div className='card-description'>{description}</div>
                    
                    <div className='card-tags'>
                        {tags.map((tag, index) => (
                            <span key={index} className='tag'>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className='card-link'>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-arrow-right-square" style={{fontSize: '2em'}}></i>
                    </a>
                </div>
            </div>
        </>
  );
}

export default CardWide;