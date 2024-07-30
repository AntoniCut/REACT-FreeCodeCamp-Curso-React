//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import './App.css';
import freCodeCampLogo from '../src/imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import { useState } from 'react'


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    console.log('Click')
    setNumClics( numClics + 1 )
  }

  const reiniciarContador = () => {
    console.log('Reiniciar')
    setNumClics( 0 )
  }


  return (

    <div className='App'>

      <div className='freecodecamp-logo-contenedor'>

        <img
          className='freecodecamp-logo'
          src={freCodeCampLogo}
          alt='Logo de freecodecamp'
        />
      </div>


      <div className='contenedor-principal'>

        <Contador numClics={numClics} />


        <Boton
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic}
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

export default App
