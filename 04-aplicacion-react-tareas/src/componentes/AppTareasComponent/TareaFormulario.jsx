//  *********************************************************************
//  **********  /src/componentes/AppTareasComponent/TareaFormulario.jsx  **********
//  *********************************************************************

import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

const TareaFormulario = (props) => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    // Obtiene el valor que escribió el usuario
    const manejarCambio = e => {
        setInput(e.target.value);
    };

    // Realiza la acción de envío del formulario
    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completado: false
        };
        props.onSubmit(tareaNueva);
        setInput('');
        inputRef.current.focus();
    };

    return (
        <form className="tarea-formulario" onSubmit={manejarEnvio}>
            <input
                className="tarea-input"
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                value={input}
                onChange={manejarCambio}
                ref={inputRef}
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    );
};

export default TareaFormulario;






// //  *********************************************************************
// //  **********  /src/componentes/AppTareasComponent/Tarea.jsx  **********
// //  *********************************************************************

// import React, { useState, useRef } from "react";
// import { v4 as uuidv4 } from 'uuid';


// const TareaFormulario = (props) => {


//     const [input, setInput] = useState('');
//     const inputRef = useRef(null);


//     //  -----  Obtiene el valor que escribio el usuaario  -----
//     const manejarCambio = e => {
//         console.log('Escribiendo...');
//         setInput(e.target.value)        //  Extraemos el valor del input.
//         console.log(e.target.value);
//     }


//     //  -----  Realiza la acción de Envio del formulario  -----
//     const manejarEnvio = e => {
        
//         e.preventDefault();
//         console.log('Enviando Formulario');
        
//         const tareaNueva = {
//              id: uuidv4(),
//              texto: input,
//              completado: false
//         }
//         console.log(tareaNueva);

//         //  -----  Manda la Tarea a Lista de Tareas  -----
//         props.onSubmit(tareaNueva);

//         //  -----  Limpiar el input y hacer foco -----
//         setInput('');
//         inputRef.current.focus();
//     }


//     return (

//         <form 
//             className="tarea-formulario"
//             onSubmit={manejarEnvio}    
//         >
            
//             <input 
//                 className="tarea-input"
//                 type='text'
//                 placeholder='Escribe una tarea'
//                 name='texto'
//                 value={input}
//                 onChange={manejarCambio}
//                 ref={inputRef}
//             />

//             <button className="tarea-boton"> Agregar Tarea </button>

//         </form>

//     )
// }

// export default TareaFormulario;