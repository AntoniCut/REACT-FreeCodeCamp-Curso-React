//  ****************************************************************************
//  **********  /src/componentes/HeaderComponent/HeaderComponent.jsx  **********
//  ****************************************************************************


import { LogoReactComponent } from '../jsx/LogoReactComponent';
import { LogoAplicacionComponent } from './LogoAplicacionComponent';
import { TituloAplicacionComponent } from '../jsx/TituloAplicacionComponent';


export const HeaderComponent = () => {

    return (

        <header className="App-header">

            {/* -----  Logo de React  ----- */}
            <LogoReactComponent />

            <div className='container-logoCentral-tituloAplicacion'>

                {/* -----  Logo de la Aplicacion  ----- */}
                <LogoAplicacionComponent />

                {/* -----  Título de la Aplicación  ----- */}
                <TituloAplicacionComponent />

            </div>

        </header>
    )
}