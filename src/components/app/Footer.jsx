function Footer() {
    return (
        <footer>
            <div className="footer-top">
                
                {/* TODO. RESPONSIVE */}
                <div className="footer-item">
                    <img src={`${import.meta.env.BASE_URL}images/logotipo.png`} 
                    className="logotipo" alt="Logotipo" width={"250px"}/>
                    
                    <p>Desarrolladora web junior en formación, flexible y con entusiasmo de seguir aprendiendo.</p>
                </div>


                <div className="separator"></div>


                <div className="footer-item">
                    {/* TODO. RESPONSIVE */}
                    <ul>
                        <h5>Contacto</h5>
                        <li> <i class="bi bi-envelope"></i> desireeruedatorresalmeria@gmail.com </li>
                        <li> <i class="bi bi-telephone"></i> +34 605726030 </li>
                    </ul>

                    {/* TODO. RESPONSIVE */}
                    <div className="profiles">
                        <h5>Perfiles</h5>

                        <a href=""><i class="bi bi-github"></i></a>
                        
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        
                        <a href="">
                            <img src={`${import.meta.env.BASE_URL}images/europass-logo.png`} 
                            className="" alt="Logotipo" width={"100px"}/>
                        </a>
                    </div>

                </div>

                
                <div className="separator"></div>

                {/* TODO. RESPONSIVE */}
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