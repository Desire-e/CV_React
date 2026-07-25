/**
 * Componente en Header
 */

import './Navtab.css';

// componentes bootstrap
import Nav from 'react-bootstrap/Nav'; 
// rutas, links
import { Link, useLocation } from "react-router-dom"; 


function Navtab() {

    // useLocation: Hook de React Router que te dice en qué ruta estás ahora mismo.
    const location = useLocation();

    return (
        <div className='navtab-container'>

            {/* 
            activeKey: Prop de React Bootstrap. Indica qué componente se selecciona en cada render
            location.pathname dará la ruta relativa (/portfolio, ...) 
            
            defaultActiveKey: Indica valor inicial, no cambia) 
            */}
            <Nav variant="underline" defaultActiveKey="/" activeKey={location.pathname}>
                <Nav.Item>
                    {/* eventKey: Prop que usan los componentes de react-bootstrap para identificar 
                    de forma única cada ítem dentro de un grupo. */}
                    <Nav.Link as={Link} to="/" eventKey="/">Landing</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio">Portfolio</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={Link} to="/experience" eventKey="/experience">Experiencia</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Navtab;