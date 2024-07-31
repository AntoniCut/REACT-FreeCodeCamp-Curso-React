//  ****************************************************************************
//  **********  /src/componentes/HeaderComponent/HeaderComponent.jsx  **********
//  ****************************************************************************


import { LogoReactComponent } from '../jsx/LogoReactComponent';
import { LogoFreeCodeCampComponent } from '../jsx/LogoFreeCodeCampComponent';
import { TituloAplicacionComponent } from '../jsx/TituloAplicacionComponent';


export const HeaderComponent = () => {

    return (

        <header className="App-header">

            {/* -----  Logo de React  ----- */}
            <LogoReactComponent />

            <div className='container-logoCentral-tituloAplicacion'>

                {/* -----  Logo de FreeCodeCamp  ----- */}
                <LogoFreeCodeCampComponent />

                {/* -----  Título de la Aplicación  ----- */}
                <TituloAplicacionComponent />

            </div>

        </header>
    )
}