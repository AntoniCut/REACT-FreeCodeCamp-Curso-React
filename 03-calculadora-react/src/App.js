//  **********************************
//  **********  src/App.js  **********
//  **********************************


import './App.css'
import logoReact from './logo.svg';
import freecodecampLogo from './imagenes/freecodecamp-logo.png'
import { Boton } from './componentes/Boton'
import { Pantalla } from './componentes/Pantalla'
import { BotonClear } from './componentes/BotonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'


//  *********************************************************
//  **********  Componente Padre de la Aplicación  **********
//  *********************************************************

function App() {

    const [input, setInput] = useState('')

    const esOperador = valor => {
        return valor === '+' || valor === '-' || valor === '*' || valor === '/';
    };

    const agregarInput = val => {
        if (input === '' && (val === '.' || esOperador(val))) {
            alert('Introduce números primero, por favor.');
        } else {
            setInput(input + val.toString());
        }
    };

    const calcularResultado = () => {
        if (input) {
            try {
                setInput(evaluate(input));
            } catch (error) {
                alert('Error en la expresión matemática');
            }
        } else {
            alert('Por favor ingrese valores para realizar los cálculos');
        }
    };


    return (

        // **********  Contenedor de la Aplicación  **********
        <div className='App'>

            {/* **********  Icono React + Logo 'FreeCodeCamp'  ********** */}
            <header className='App-header'>
                <img src={logoReact} className='App-logo' alt='logo' />
                <img src={freecodecampLogo} className="freecodecamp-logo" alt="logo FreeCodeCamp" />
            </header>

            {/* **********  Contenedor de la Calculadora  ********** */}
            <div className='contenedor-calculadora'>

                <Pantalla input={input} />

                <div className='fila'>

                    <Boton manejarClick={agregarInput}> 1 </Boton>
                    <Boton manejarClick={agregarInput}> 2 </Boton>
                    <Boton manejarClick={agregarInput}> 3 </Boton>
                    <Boton manejarClick={agregarInput}> + </Boton>

                </div>

                {/* *****  Fila 1  ***** */}
                <div className='fila'>

                    <Boton manejarClick={agregarInput}> 4 </Boton>
                    <Boton manejarClick={agregarInput}> 5 </Boton>
                    <Boton manejarClick={agregarInput}> 6 </Boton>
                    <Boton manejarClick={agregarInput}> - </Boton>

                </div>


                {/* *****  Fila 2  ***** */}
                <div className='fila'>

                    <Boton manejarClick={agregarInput}> 7 </Boton>
                    <Boton manejarClick={agregarInput}> 8 </Boton>
                    <Boton manejarClick={agregarInput}> 9 </Boton>
                    <Boton manejarClick={agregarInput}> * </Boton>

                </div>


                {/* *****  Fila 3  ***** */}
                <div className='fila'>

                    <Boton manejarClick={calcularResultado}> = </Boton>
                    <Boton manejarClick={agregarInput}> 0 </Boton>
                    <Boton manejarClick={agregarInput}> . </Boton>
                    <Boton manejarClick={agregarInput}> / </Boton>

                </div>


                {/* *****  Fila 4  ***** */}
                <div className='fila'>

                    <BotonClear manejarClear={() => setInput('')}>
                        clear
                    </BotonClear>

                </div>

            </div>


        </div>

    )
}

export default App
