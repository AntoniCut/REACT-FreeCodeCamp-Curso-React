//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import './App.css';
import logoReact from './logo.svg';
import freecodecampLogo from './imagenes/freecodecamp-logo.png';
import { Boton } from './componentes/Boton';
import { Pantalla } from './componentes/Pantalla';
import { BotonClear } from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {


    const [input, setInput] = useState('0');

    const esOperador = valor => {
        return valor === '+' || valor === '-' || valor === '*' || valor === '/';
    };


    const agregarInput = val => {

        if (input === '0' && !esOperador(val)) setInput(val.toString());
        else if (esOperador(val) && esOperador(input[input.length - 1])) setInput(input.slice(0, -1) + val);  // Reemplaza el operador anterior si se ingresa uno nuevo
        else if (input === '0' && val === '0') return;                                                        // Evita agregar múltiples ceros iniciales
        else setInput(input + val.toString());

    };


    const calcularResultado = () => {
        if (input.includes('/0')) {
            alert('Error: División por 0 no permitida');
            setInput('0');
        } else if (input && !esOperador(input[input.length - 1])) {
            try {
                const resultado = evaluate(input);
                setInput(resultado.toString());
            } catch (error) {
                alert('Error en la expresión matemática');
            }
        } else {
            alert('Por favor ingrese una expresión válida para realizar los cálculos');
        }
    };


    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logoReact} className='App-logo' alt='logo' />
                <img src={freecodecampLogo} className="freecodecamp-logo" alt="logo FreeCodeCamp" />
            </header>

            <div className='contenedor-calculadora'>
                <Pantalla input={input} />

                <div className='fila'>
                    <Boton manejarClick={agregarInput}>1</Boton>
                    <Boton manejarClick={agregarInput}>2</Boton>
                    <Boton manejarClick={agregarInput}>3</Boton>
                    <Boton manejarClick={agregarInput}>+</Boton>
                </div>

                <div className='fila'>
                    <Boton manejarClick={agregarInput}>4</Boton>
                    <Boton manejarClick={agregarInput}>5</Boton>
                    <Boton manejarClick={agregarInput}>6</Boton>
                    <Boton manejarClick={agregarInput}>-</Boton>
                </div>

                <div className='fila'>
                    <Boton manejarClick={agregarInput}>7</Boton>
                    <Boton manejarClick={agregarInput}>8</Boton>
                    <Boton manejarClick={agregarInput}>9</Boton>
                    <Boton manejarClick={agregarInput}>*</Boton>
                </div>

                <div className='fila'>
                    <Boton manejarClick={calcularResultado}>=</Boton>
                    <Boton manejarClick={agregarInput}>0</Boton>
                    <Boton manejarClick={agregarInput}>.</Boton>
                    <Boton manejarClick={agregarInput}>/</Boton>
                </div>

                <div className='fila'>
                    <BotonClear manejarClear={() => setInput('0')}>clear</BotonClear>
                </div>
            </div>
        </div>
    );
}

export default App;
