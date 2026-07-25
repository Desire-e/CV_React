/**
 * Componente reutilizable
 * Para modales, menus...
 */

import './Overlay.css';

import { useEffect } from "react";

function Overlay({isActive, closeChildren, children}) {


    useEffect(()=>{
        function stopScroll(){
            isActive ? 
            document.body.classList.add("modal-active") : 
            document.body.classList.remove("modal-active");
        }

        stopScroll();

    }, [isActive]);
    
    return (
        <div className={ isActive ? "overlay active" : "overlay"}
        onClick={closeChildren}>
            
            <div className="overlay-children-container"
            // Parar propagación de eventos hacia arriba (<Overlay>):
            // evitar que el click directo en el menu / modal haga que <Overlay> lo cierre
            onClick={(e) => e.stopPropagation()}>
        
                {children}
        
            </div>
        
        </div>
    );
}
export default Overlay;
