//  *******************************************************
//  **********  /src/componentes/BotonClear.jsx  **********
//  *******************************************************


import React from 'react'
import '../hojas-de-estilo/BotonClear.css'


//  ******************************************
//  **********  Componente 'BotonClear'  **********
//  ******************************************


// Componente 'BotonClear'
export const BotonClear = (props) => {

    return (

        <div
            className='boton-clear'
            onClick={props.manejarClear}
        >
            {props.children}

        </div>
    )
}
























