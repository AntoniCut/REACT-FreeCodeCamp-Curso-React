//  ************************************************************
//  **********  /src/componentes/ContadorDeClick.jsx  **********
//  ************************************************************


import React from 'react';
import Boton from "./Boton"
import Contador from "./Contador"


class ContadorDeClicks extends React.Component {


    constructor() {

        super();
        this.state = { numClics: 0 };

        this.manejarClicDecremento = this.manejarClicDecremento.bind(this);
        this.manejarClicIncremento = this.manejarClicIncremento.bind(this);
        this.reiniciarContador = this.reiniciarContador.bind(this);
    }
    


    manejarClicDecremento() {

        // Verificar el estado actual antes de decrementar
        if (this.state.numClics > 0) this.setState(({ numClics }) => ({ numClics: numClics - 1 }));
        
    }


    manejarClicIncremento() {

        this.setState(({ numClics }) => ({ numClics: numClics + 1 }));

    }


    reiniciarContador() {
        
        this.setState({ numClics: 0 });
    }


    render() {

        return (

            <div className='contenedor-principal'>

                <div className="container-contador">
                    <Contador numClics={this.state.numClics} />
                </div>

                <div className="container-botones">

                    <Boton
                        texto='-'
                        esBotonDeClic={true}
                        manejarClic={this.manejarClicDecremento}
                    />

                    <Boton
                        texto='+'
                        esBotonDeClic={true}
                        manejarClic={this.manejarClicIncremento}
                    />

                    <Boton
                        texto='Reiniciar'
                        esBotonDeClic={false}
                        manejarClic={this.reiniciarContador}
                    />

                </div>

            </div>
        )
    }
}


export default ContadorDeClicks;

