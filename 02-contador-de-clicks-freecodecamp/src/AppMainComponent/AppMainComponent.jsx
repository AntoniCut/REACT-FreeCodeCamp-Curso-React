//  ******************************************************************
//  **********  /src/AppMainComponent/AppMainComponent.jsx  **********
//  ******************************************************************


import { ContadorDeClicks } from './ContadorDeClicks';


export const AppMainComponent = () => {

    return (

        // **********  Contador de Clicks Componente  ********** 
        
        <div className="app-main-component">
            
            {/* <h1> Aqui se Renderiza la Aplicación </h1> */}
            <ContadorDeClicks />

        </div>

    )
}