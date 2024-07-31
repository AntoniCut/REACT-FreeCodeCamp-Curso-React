//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import './App.css';
import { HeaderComponent } from './componentes/HeaderComponent/jsx/HeaderComponent';
import LogoReact from './componentes/LogoReact'
import { TestimoniosComponent } from './componentes/TestimoniosComponent/TestimoniosComponent';


//  **********  Componente Principal (PADRE) de la Aplicacion  **********
const App = () => {

    return (

        <div className="App">

            {/* **********  Cabecera con los Logos y el Titulo del Proyecto  ********** */}
            <HeaderComponent />

            {/* **********  Logo de React en la Parte Central  ********** */}
            <LogoReact />

            <div className='contenedor-principal'>

                {/* **********  Aqui se Renderiza los Testimonios  ********** */}
                <TestimoniosComponent />

            </div>

        </div>
    )
}


export default App;
