import Card from 'react-bootstrap/Card';
// import skills from '../../data/landing/skills.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardsAccordions from '../reusables/CardsAccordions';

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

            <CardsAccordions
            cardsHead={{title:"Frontend", icon:"bi bi-code-slash"}} 
            cardsBody={[
                    {image: "html-icon.png" ,description:"HTML5"},
                    {image: "css-icon.png" ,description:"CSS3"},
                    {image: "js-icon.png" ,description:"JavaScript"},
                    {image: "bootstrap-5-logo-icon.png" ,description:"Bootstrap 5"}, 
                    {image: "react-js-icon.png" ,description:"React"}, 
                ]} 
            />

            <CardsAccordions
            cardsHead={{title:"Backend", icon:"bi bi-braces"}} 
            cardsBody={[
                    {image: "php-icon.png" ,description:"PHP"},
                    {image: "laravel-icon.png" ,description:"Laravel"},
                    {image: "java-icon.png" ,description:"Java"},
                    {image: "node-js-icon.png" ,description:"Node.js"}, 
                    {image: "api-icon.png" ,description:"RESTful API"}, 
                    {image: "mysql-icon.png" ,description:"MySQL"}, 
                ]} 
            />
            
            <CardsAccordions
            cardsHead={{title:"DevOps, Deployment", icon:"bi bi-cloud"}} 
            cardsBody={[
                    {image: "aws-icon.png" ,description:"AWS EC2"},
                    {image: "docker-icon.png" ,description:"Docker"},
                    {image: "git-icon.png" ,description:"Git, GitHub"},
                    {image: "google-cloud-icon.png" ,description:"Google Cloud Console"}, 
                    {image: "dns-icon.png" ,description:"DNS management"},
                    {image: "filezilla-icon.png" ,description:"FTP / Fillezila"},
                    {image: "apache-http-icon.png" ,description:"Apache HTTP Server"},
                    {image: "apache-tomcat-icon.png" ,description:"Apache Tomcat"}
                ]} 
            />

            <CardsAccordions
            cardsHead={{title:"SEO, Digital Marketing", icon:"bi bi-shop-window"}} 
            cardsBody={[
                    {image: "google-business-icon.png" ,description:"Google Business Profile"}, 
                    {image: "google-ads-icon.png" ,description:"Google Ads"},
                    {image: "google-analytics-icon.png" ,description:"Google Analytics"},
                    {image: "google-search-console-icon.png" ,description:"Google Search Console"},
                ]} 
            />

        </div>
    </>

  );
}

export default Skills;