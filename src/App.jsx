/** App.jsx 
Es el cerebro principal de tu aplicación. Donde:
- Se activa el sistema de navegación
- Se decide qué página mostrar según la URL
- Se colocan los componentes comunes (Header, Nav, Footer)

Sirve como una "plantilla": inserta componentes comunes + contenido de pagina concreta
Sirve como enrutador: asocia URLs con paginas
*/


// sistema de navegación
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// estilos
import 'bootstrap/dist/css/bootstrap.min.css'; // estilos generales bootstrap
import './styles/global.css'; // mis estilos (importados detrás de bootstrap para que sobreescriba)
import 'bootstrap-icons/font/bootstrap-icons.css'; // iconos bootstrap


// componentes base
import Header from "./components/app/Header";
import NavBar from "./components/app/NavBar";
import Footer from "./components/app/Footer";

// paginas
import LandingPage from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import ExperiencePage from "./pages/ExperiencePage";


function App() {
  return (
   <Router>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
/*
  <Router> -- Esto activa el sistema de navegación, para que los Links funcionen.
  <Routes> -- Asigna URLs con el elemento (page a la que dirige)
  <Route path="*" element={<Navigate to="/" />} /> -- Si alguien escribe una URL que no existe redir al inicio.
*/
/* Estructura explicada:

    <Router> ... </Router>
    Esto activa el sistema de navegación de React Router.
    A partir de aquí todo lo que esté dentro va a tener rutas y navegación
    
    <Header />, <Nav /> Y <Footer />
    Son mis componentes de layout común.
    Fuera de <Routes> porque siempre quieres que estén visibles, sin importar la página.
    Si los pusieras dentro de <Routes>, solo aparecerían en una ruta específica.
    
    <Routes> y <Route>
    Enrutador. Lo que decide qué página mostrar según la URL.  
*/





/* template por defecto que viene con vite

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/