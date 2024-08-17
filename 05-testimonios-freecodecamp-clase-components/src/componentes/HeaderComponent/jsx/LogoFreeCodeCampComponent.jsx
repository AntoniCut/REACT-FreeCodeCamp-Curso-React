//  **************************************************************************************
//  **********  /src/componentes/HeaderComponent/LogoFreeCodeCampComponent.jsx  **********
//  **************************************************************************************


import freeCodeCampLogo from '../img/freecodecamp-logo.png';


export const LogoFreeCodeCampComponent = () => {

    return (

        <div className='freecodecamp-logo-contenedor'>
            <img src={freeCodeCampLogo}
                className='freecodecamp-logo'
                alt='Logo de FreeCodeCamp'
            />
        </div>

    )
}