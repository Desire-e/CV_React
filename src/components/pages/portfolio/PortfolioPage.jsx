import '../XPage.css';
import PortfolioTablist from './PortfolioTablist';

import { useState, useEffect } from 'react';


// ----------------------------
// Handler de estado de pantalla
// ----------------------------
function useIsMobile(breakpoint = 768) {

    // estado de pantalla - false inicial si pantalla desktop
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
        // cambiar estado de pantalla
        const handler = () => setIsMobile(window.innerWidth < breakpoint);

        // evento resize - cambiar estado de pantalla
        window.addEventListener('resize', handler);        
        // limpieza de listeners
        return () => window.removeEventListener('resize', handler);
    
    }, [breakpoint]); // aplicado cuando el breakpoint cambie

    // devuelve estado
    return isMobile;
}



function PortfolioPage () {

    // actualiza estado de pantalla
    const isMobile = useIsMobile();

    return(
        <div className="container-page portfolio">
            <PortfolioTablist isMobile={isMobile}/>
        </div>
    );
} 
export default PortfolioPage;