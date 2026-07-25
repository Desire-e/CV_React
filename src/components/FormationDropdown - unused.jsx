// Dropdown
// - Con props para obtener formations.json desde Formation.jsx
// - Con state para interactividad (evento click)

import './FormationDropdown.css'

import { useState } from "react";

function FormationDropdown({title, course, knowns}){

    const [open, setOpen] = useState(false); // dropdown inicialmente cerrado

    return(
            <div className="formation-item">

                {/* Parte siempre visible */}
                <div className="formation-header">
                    <div className="formation-header-info">
                        <h5 className="formation-title">{title}</h5>
                        <p className="formation-course">{course}</p>
                    </div>

                    {/* al clickar:
                        - transition de girar 90 grados: v -- >
                        - abre / cierra formation-knowns (según fuera su estado antes de ser clickado) 
                    */}
                    <button onClick={() => setOpen(!open)} type="button" className={`${open ? "active" : ""}`}>
                        <i className="bi bi-chevron-down" style={{fontSize: '1.5em'}}></i>
                    </button>
                </div>

                
                
                {/* Si open===true, se muestra suave (añade clase active con una transition suave) */}
                <div className={`formation-knowns ${open ? "active" : ""}`}>
                    <ul>
                        <h6>Conocimientos adquiridos:</h6>
                        {knowns.map( (known, index) => (
                            <li key={index}>{known}</li>
                        ))}
                    </ul>
                </div>
                {/*** Otra forma de hacerlo (sin transición): 
                    { condicion && fragmentoCodigo...} 
                    Visible solo cuando condicion se cumple (ya que fragmentoCodigo siempre es true) 
                    - Si condición===true -- devuelve el resultado fragmentoCodigo
                    - Si la condición===false -- devuelve false -- React Renderiza JSX, pero ignora false, 
                      null y undefined
                */}    
            </div>
    );
}
export default FormationDropdown;