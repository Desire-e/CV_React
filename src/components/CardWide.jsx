/* componente reutilizable */
/* es un card individual */

function CardWide({id, title, description, image, link, tags, colorClass}) {
    // const basePathImg = "/CV_React/src/assets/images/";

    return (
        <>
            <div className={`card-item ${colorClass}`} key={id}>
                <div className='card-image'>
                    <img src={`${import.meta.env.BASE_URL}images/${image}`} alt={title}/>
                    {/* import.meta.env.BASE_URL
                    variable que contiene exactamente el base que pusiste en vite.config.js 
                    
                    Todo lo que está dentro de la carpeta public/ ya se copia a la raíz de dist/
                    GitHub Pages sirve esos archivos desde el base que definí
                    */}
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