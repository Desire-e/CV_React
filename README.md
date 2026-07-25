# CV React
 
Currículum interactivo construido con **React** y **Vite**, desplegado en GitHub Pages.
 
Proyecto personal para practicar y demostrar mis habilidades con React: componentes, enrutamiento, y despliegue de una SPA en producción.
 
**Demo en vivo:** https://desire-e.github.io/CV_React/
 

## Características

Este CV interactivo simula un currículum tradicional pero navegable como una web app, con transiciones entre secciones en lugar de recargar la página.

- **React Router + react-router-hash-link**: para navegar entre secciones del CV con scroll suave, como si fueran anclas de una sola página, pero manteniendo rutas reales.
- **Bootstrap + React Bootstrap**: para acelerar el maquetado responsive y enfocar el tiempo en la lógica de componentes en lugar de escribir CSS desde cero.
- **Vite**: como bundler, por su velocidad en desarrollo.
- **Hooks de React**: useEffect y useState para controles de estado y renderizados.


## Tecnologías
 
- [React 19](https://react.dev/)
- [Vite 7](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap](https://getbootstrap.com/) + [React Bootstrap](https://react-bootstrap.github.io/)
- [ESLint](https://eslint.org/)


## Empezar en local
 
```bash
git clone https://github.com/Desire-e/CV_React.git
cd CV_React
npm install
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

  
## Despliegue
 
Este proyecto se despliega en **GitHub Pages** usando el paquete [`gh-pages`](https://www.npmjs.com/package/gh-pages).
Para publicar los últimos cambios:
 
```bash
npm run deploy
```


## Licencia
 
Este proyecto es de uso personal/educativo.


## Autor
 
**Desire-e** — [GitHub](https://github.com/Desire-e)