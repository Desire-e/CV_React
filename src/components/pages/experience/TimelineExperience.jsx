/**
 * Componente de ExperiencePage.jsx
 */
import './TimelineExperience.css';

function TimelineExperience({dataGroups = []}){

    return(
        <article className="timeline-container">
            {dataGroups.map((data, i) => (
            
            <div className="timeline-item" key={i}>
                <div className="timeline-subject-icon">
                    <div className="icon">
                        <i className={data.icon}></i>
                    </div>
                </div>

                <div className="timeline-content">
                    <div className="timeline-content-head">
                        <span className="pretitle">{data.interval}</span>
                        <h2>{data.title}</h2>
                        <h3>{data.subtitle}</h3>                        
                    </div>

                    <p className="timeline-content-description">{data.description}</p>
                </div>
            </div>
            
            ))}
        </article>

    );
} 
export default TimelineExperience;