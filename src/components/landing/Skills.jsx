import Card from 'react-bootstrap/Card';
// import skills from '../../data/landing/skills.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Skills() {

  return (
        /* key -- identificador único de cada elemento en una lista
        Ayuda a React a actualizar solo los elementos que cambian
        Evita warnings y posibles bugs en componentes dinámicos 
        */
    <>

        <div id="skills"></div>

        <div className="contenido skills">

            <h2>Habilidades</h2>

            <div className="skill-section">
                <article className="skill-info">
                    <div className="skill-icon"><i className="bi bi-code-slash"></i></div>
                    <h3>Frontend</h3>
                </article>

                <div className="cards">
                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/html-icon.png`} alt=""/>
                        <span>HTML5</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/css-icon.png`} alt=""/>
                        <span>CSS3</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/js-icon.png`} alt=""/>
                        <span>JavaScript</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/bootstrap-5-logo-icon.png`} alt=""/>
                        <span>Bootstrap</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/react-js-icon.png`} alt=""/>
                        <span>React</span>
                    </div>
                </div>
            </div> 


            <div className="skill-section">
                <article className="skill-info">
                    <div className="skill-icon"><i className="bi bi-braces"></i></div>
                    <h3>Backend</h3>
                </article>
                
                
                <div className="cards">
                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/php-icon.png`} alt="" />
                        <span>PHP</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/laravel-icon.png`} alt="" />
                        <span>Laravel</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/java-icon.png`} alt="" />
                        <span>Java</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/node-js-icon.png`} alt="" />
                        <span>Node.js</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/api-icon.png`} alt="" />
                        <span>RESTful API</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/mysql-icon.png`} alt="" />
                        <span>MySQL</span>
                    </div>
                </div>
            
            </div>

            <div className="skill-section">
                <article className="skill-info">
                    <div className="skill-icon"><i className="bi bi-cloud"></i></div>
                    <h3>DevOps, Deployment</h3>
                </article>

                <div className="cards">
                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/aws-icon.png`} alt="" />
                        <span>AWS EC2</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/docker-icon.png`} alt="" />
                        <span>Docker</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/git-icon.png`} alt="" />
                        <span>Git, GitHub</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/google-cloud-icon.png`} alt="" />
                        <span>Google Cloud Console</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/dns-icon.png`} alt="" />
                        <span>DNS management</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/filezilla-icon.png`} alt="" />
                        <span>FTP / Fillezila</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/apache-http-icon.png`} alt="" />
                        <span>Apache HTTP Server</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/apache-tomcat-icon.png`} alt="" />
                        <span>Apache Tomcat</span>
                    </div>
                </div>
            </div>

            <div className="skill-section">
                <article className="skill-info">
                    <div className="skill-icon"><i className="bi bi-shop-window"></i></div>
                    <h3>SEO, Digital Marketing</h3>
                </article>

                <div className="cards">
                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/google-business-icon.png`} alt="" />
                        <span>Google Business Profile</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/google-ads-icon.png`} alt="" />
                        <span>Google Ads</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/google-analytics-icon.png`} alt="" />
                        <span>Google Analytics</span>
                    </div>

                    <div className="card">
                        <img src={`${import.meta.env.BASE_URL}images/google-search-console-icon.png`} alt="" />
                        <span>Google Search Console</span>
                    </div>
                </div>
            </div>

        </div>
    </>

  );
}

export default Skills;