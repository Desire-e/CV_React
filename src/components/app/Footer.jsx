function Footer() {
    return (
        <footer>
            <div className="footer-top">
                
                <div className="footer-item">
                    <img src={`${import.meta.env.BASE_URL}images/logotipo.png`} 
                    className="logo" alt="Logotipo" width={"250px"}/>
                    
                    <p>Desarrolladora web junior en formación, flexible y con entusiasmo de seguir aprendiendo.</p>
                </div>


                <div className="separator"></div>


                <div className="footer-item">
                    <ul>
                        <h5>Contacto</h5>
                        <li> <i className="bi bi-envelope"></i> desireeruedatorresalmeria@gmail.com </li>
                        <li> <i className="bi bi-telephone"></i> +34 605726030 </li>
                    </ul>

                    <div className="profiles">
                        <h5>Perfiles</h5>

                        <a target="_blank" // abrir en nueva pestaña
                        rel="noopener noreferrer" // seguridad solo para links externos
                        href="https://github.com/Desire-e">
                            <i className="bi bi-github"></i>
                        </a>

                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/desir%C3%A9e-rueda-torres-735bab2b3/">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        
                        <a target="_blank" 
                        rel="noopener noreferrer"
                        href="https://europa.eu/europass/eportfolio/screen/profile?profileId=664b328a0b67c20479eeab25&lang=en">
                            <img src={`${import.meta.env.BASE_URL}images/europass-logo.png`} 
                            className="" alt="perfil europass" width={"100px"}/>
                        </a>
                    </div>

                </div>

                
                <div className="separator"></div>

                <div className="footer-item">
                    <ul>
                        <h5>Disponibilidad</h5>
                        <li>Buscando primera oportunidad profesional / prácticas</li>
                        <li>Disponible para remoto o híbrido</li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Desirée Rueda Torres</p>
            </div>
        </footer>
    );
};

export default Footer;