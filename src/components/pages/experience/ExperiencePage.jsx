import '../XPage.css';
import dataGroups from '../../../data/experience/experience.json'

import TimelineExperience from './TimelineExperience';

function ExperiencePage() {
    return(
        <div className="container-page experience">

            <section>
                <TimelineExperience
                    dataGroups={dataGroups} />    
            </section>

        </div>
    );
} 
export default ExperiencePage;