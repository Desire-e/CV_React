import { useMemo } from "react";
/*
useMemo es un Hook de React para guardar en caché el 
resultado de un cálculo entre renderizados.

const cachedValue = useMemo(calculateValue, dependencies)

Para que las partículas se generen una sola vez, y que al 
renderizar cada vez no cambien todas las posiciones, 
tamaños y opacidades
*/


export default function DustParticlesAnimation() {

    // /////////////////
    // CREAR PARTICULAS
    // /////////////////

    // useMemo() recibe una función.
    // lo que devuelva esa función se guardará en particles.
    const particles = useMemo(() => {
        /* Array.from(origen, funciónOpcional) 
            Método js que crea un nuevo array a partir de otro objeto 
            o de una longitud determinada. 
            Opcionalmente puede transformar cada elemento mientras lo crea.
        */
        return Array.from(
            // Crear array de longitud 80 elementos
            { length: 80 }, 

            // Transformar cada elemento (_, i) 
            // cada elemento inicialmente vale undefined, dejará de serlo al transformar cada uno
            (emptyValue, i) => (
                // cada elemento del array de partículas creado es un objeto
                {
                    id: i,
                    size: Math.random() * 5 + 1,
                    left: Math.random() * 100,
                    top: Math.random() * 100,
                    duration: Math.random() * 10 + 8,
                    delay: Math.random() * -15,
                    opacity: Math.random() * 0.5 + 0.2,
                }
            )
        );

    // dependencias: ejecuta este código solo una vez, cuando el componente se monta.
    }, []);


    // ///////////////////////
    // RENDERIZAR PARTÍCULAS
    // ///////////////////////

    return (
        <div className="dust">
            {particles.map((p) => (
                <span
                key={p.id}
                className="particle"
                style={{
                    width: p.size,
                    height: p.size,
                    left: `${p.left}%`,
                    top: `${p.top}%`,
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay}s`,
                    opacity: p.opacity,
                }}
                />
            ))}
        </div>
    );
}
