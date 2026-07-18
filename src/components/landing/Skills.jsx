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

            <div className='categories'>

                <div className='category'>
                    <div className='title'><h3>Frontend</h3></div>
                    
                    <div className='technologies'>

                            <div className='technology'>
                                <div className='icon'>
                                    <img src={`${import.meta.env.BASE_URL}images/html-icon.png`} alt=""/>
                                </div>

                                <h4>HTML5</h4>
                            </div>

                            <div className='technology'>
                                <div className='icon'>
                                    <img src={`${import.meta.env.BASE_URL}images/css-icon.png`} alt=""/>
                                </div>

                                <h4>CSS3</h4>
                            </div>

                            <div className='technology'>
                                <div className='icon'>
                                    <img src={`${import.meta.env.BASE_URL}images/js-icon.png`} alt=""/>
                                </div>

                                <h4>JavaScript</h4>
                            </div>

                            <div className='technology'>
                                <div className='icon'>
                                    <img src={`${import.meta.env.BASE_URL}images/bootstrap-5-logo-icon.png`} alt=""/>
                                </div>

                                <h4>Bootstrap 5</h4>
                            </div>

                            <div className='technology'>
                                <div className='icon'>
                                    <img src={`${import.meta.env.BASE_URL}images/react-js-icon.png`} alt=""/>
                                </div>

                                <h4>React</h4>
                            </div>
                    </div>
                </div>



                <div className='category'>
                    <div className='title'><h3>Backend</h3></div>
    
                    <div className='technologies'>
                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/php-icon.png`} alt="" />
                            </div>

                            <h4>PHP</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/laravel-icon.png`} alt="" />
                            </div>

                            <h4>Laravel</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/java-icon.png`} alt="" />
                            </div>

                            <h4>Java</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/node-js-icon.png`} alt="" />
                            </div>

                            <h4>Node.js</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/api-icon.png`} alt="" />
                            </div>

                            <h4>RESTful API</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/mysql-icon.png`} alt="" />
                            </div>

                            <h4>MySQL</h4>
                        </div>
                    </div>
                </div>

                {/* TODO. Icons */}
                <div className='category'>
                    <div className='title'><h3>DevOps, Deploy</h3></div>
    


                    <div className='technologies'>
                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/aws-icon.png`} alt="" />
                            </div>

                            <h4>AWS EC2</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/docker-icon.png`} alt="" />
                            </div>

                            <h4>Docker</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/git-icon.png`} alt="" />
                            </div>

                            <h4>Git, GitHub</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/google-cloud-icon.png`} alt="" />
                            </div>

                            <h4>Google Cloud Console</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/`} alt="" />
                            </div>

                            <h4>DNS Management</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/`} alt="" />
                            </div>

                            <h4>FTP / FileZilla</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/`} alt="" />
                            </div>

                            <h4>Apache HTTP Server</h4>
                        </div>

                        <div className='technology'>
                            <div className='icon'>
                                <img src={`${import.meta.env.BASE_URL}images/`} alt="" />
                            </div>

                            <h4>Apache Tomcat</h4>
                        </div>

                    </div>
                </div>


                {/* TODO.
                    SEO & Digital Marketing

                    Google Business Profile
                    Google Ads
                    Google Analytics
                    Google Search Console
                */}

            </div>

        </div>
       </>

  );
}

export default Skills;