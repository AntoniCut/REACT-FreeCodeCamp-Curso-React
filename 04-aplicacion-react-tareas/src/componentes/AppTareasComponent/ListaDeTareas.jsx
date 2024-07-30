//  *****************************************************************************
//  **********  /src/componentes/AppTareasComponent/ListaDeTareas.jsx  **********
//  *****************************************************************************

import React, { useState, useEffect } from "react";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";

const ListaDeTareas = () => {
    const [tareas, setTareas] = useState(() => {
        const savedTareas = localStorage.getItem("tareas");
        return savedTareas ? JSON.parse(savedTareas) : [];
    });

    // Guardar las tareas en localStorage cuando se actualicen
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    // Agregar una Tarea
    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    // Eliminar una Tarea
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    // Completar una Tarea
    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            {/* Pinta las Tareas */}
            <div className="tareas-lista-contenedor">
                {tareas.map(tarea => (
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                    />
                ))}
            </div>
        </>
    );
};

export default ListaDeTareas;






// //  *****************************************************************************
// //  **********  /src/componentes/AppTareasComponent/ListaDeTareas.jsx  **********
// //  *****************************************************************************


// import Tarea from "./Tarea";
// import TareaFormulario from "./TareaFormulario";
// import React, { useState } from "react";


// const ListaDeTareas = () => {

//     const [tareas, setTareas] = useState([]);

    
//     //  -----  Agregamos una Tarea  -----
//     const agregarTarea = tarea => {

//         //console.log(tarea);

//         if(tarea.texto.trim()) {
            
//             tarea.texto = tarea.texto.trim();
//             const tareasActualizadas = [tarea, ...tareas];
//             setTareas(tareasActualizadas);
//         }
      
//         //console.log('Tarea Agregada');
//     }


//     //  -----  Eliminamos una Tarea  -----
//     const eliminarTarea = id => {

//         const tareasActualizadas = tareas.filter( tarea => tarea.id !== id);
//         setTareas(tareasActualizadas);
//     }


//     //  -----  Tarea Completada  -----
//     const completarTarea = id => {

//         const tareasActualizadas = tareas.map(tarea => {

//             if(tarea.id === id) {
//                 tarea.completada = !tarea.completada;
//             }

//             return tarea;
//         });
        
//         setTareas(tareasActualizadas);
//     }


//     return (
//         <>
//             <TareaFormulario onSubmit={agregarTarea} />

//             {/* **********  Pinta las Tareas  ********** */}
//             <div className="tareas-lista-contenedor">

//                 {
//                     tareas.map((tarea) =>
//                         <Tarea
//                             key={tarea.id}
//                             id={tarea.id}
//                             texto={tarea.texto}
//                             completada={tarea.completada}
//                             completarTarea={completarTarea}
//                             eliminarTarea={eliminarTarea}
//                         />
//                     )

//                 }

//             </div>
//         </>
//     )
// }


// export default ListaDeTareas;


