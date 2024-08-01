//  ************************************************************************************
//  **********  /src/componentes/HeaderComponent/LogoAplicacionComponent.jsx  **********
//  ************************************************************************************


import freeCodeCampLogo from '../img/freecodecamp-logo.png';
import react_button_icon_151947 from '../img/react_button_icon_151947.svg';


export const LogoAplicacionComponent = () => {

    return (

        <div className='logo-aplicacion-container'>
            <img src={react_button_icon_151947}
                className='logo-aplicacion'
                alt='Logo de FreeCodeCamp'
            />
        </div>

    )
}