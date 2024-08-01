//  ************************************************************
//  **********  /src/componentes/ContadorDeClick.jsx  **********
//  ************************************************************


import Boton from "./Boton"
import Contador from "./Contador"
import { useState } from "react";


export const ContadorDeClicks = () => {

    const [numClics, setNumClics] = useState(0);

    const manejarClicDecremento = () => {
        //console.log('Click')
        if (numClics === 0) return;
        setNumClics(numClics - 1)
    }

    const manejarClicIncremento = () => {
        //console.log('Click')
        setNumClics(numClics + 1)
    }

    const reiniciarContador = () => {
        //console.log('Reiniciar')
        setNumClics(0)
    }



    return (

        <div className='contenedor-principal'>

            <div className="container-contador">
                <Contador numClics={numClics} />
            </div>

            <div className="container-botones">

                <Boton
                    texto='-'
                    esBotonDeClic={true}
                    manejarClic={manejarClicDecremento}
                />

                <Boton
                    texto='+'
                    esBotonDeClic={true}
                    manejarClic={manejarClicIncremento}
                />

                <Boton
                    texto='Reiniciar'
                    esBotonDeClic={false}
                    manejarClic={reiniciarContador}
                />

            </div>

        </div>
    )
}