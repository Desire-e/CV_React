import './PortfolioTablist.css';

import PortfolioTabpanel from './PortfolioTabpanel';

import { useState } from 'react';

function PortfolioTablist({isMobile = false}){

    // estado del seleccionado (id del button)
    const [selected, setSelected] = useState('todos');

    // handler para seleccionar
    let handleClick = (e) => {
        setSelected(e.currentTarget.id);
    }

    // tablist data
    const tabs = [
        { id: 'todos', label: 'Todos' },
        { id: 'web-app', label: 'Web App' },
        { id: 'back', label: 'Backend' },
        { id: 'front', label: 'Frontend' },
        { id: 'otros', label: 'Otros' },
    ];

    return(
        <>
            {/* TODO. MOBILE VERSION SE TRANSFROMA EN UN SELECT - usar isMobile  */}
            {/* TODO. FUNCIONAMIENTO UNIDO CON TABPANEL */}
            <nav className="tablist">
                {tabs.map((tab) => (
                
                <button 
                type="button" 
                id={tab.id} key={tab.id} 
                onClick={handleClick}
                className={selected === tab.id ? 'selected' : ''}
                >
                    {tab.label}
                </button>
                
                ))}
            </nav>

            <PortfolioTabpanel isMobile={isMobile} tabSelected={selected} ></PortfolioTabpanel>
        </>

    );
}
export default PortfolioTablist;

