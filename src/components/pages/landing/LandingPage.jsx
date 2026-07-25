
import '../XPage.css';

import Skills from './Skills';
import About from './About';

function LandingPage () {
    return(
        <div className="container-page landing">
            <section>
                <About />
            </section>

            <section>
                <Skills />
            </section>
        </div>
    );
} 
export default LandingPage;