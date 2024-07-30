//  **************************************************
//  **********  /src/componentes/Boton.jsx  **********
//  **************************************************


import React from 'react'
import '../hojas-de-estilo/Boton.css'


//  ******************************************
//  **********  Componente 'Boton'  **********
//  ******************************************


// Componente 'Boton'
export const Boton = (props) => {
    
    const esOperador = valor => {
        return (valor !== '.') && (valor !== '=') && isNaN(valor)
    }
          

    return (
        
        <div
            // className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={ () => props.manejarClick(props.children) }
        >
            {props.children}

        </div>
    )
}
























