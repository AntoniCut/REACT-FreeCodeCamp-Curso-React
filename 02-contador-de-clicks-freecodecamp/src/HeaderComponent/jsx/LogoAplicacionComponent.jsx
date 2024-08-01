//  ************************************************************************************
//  **********  /src/componentes/HeaderComponent/LogoAplicacionComponent.jsx  **********
//  ************************************************************************************


import freeCodeCampLogo from '../img/freecodecamp-logo.png';


export const LogoAplicacionComponent = () => {

    return (

        <div className='logo-aplicacion-container'>
            <img src={freeCodeCampLogo}
                className='logo-aplicacion'
                alt='Logo de FreeCodeCamp'
            />
        </div>

    )
}