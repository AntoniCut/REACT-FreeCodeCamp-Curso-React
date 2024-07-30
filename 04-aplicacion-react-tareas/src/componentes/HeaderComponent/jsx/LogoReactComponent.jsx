//  *******************************************************************************
//  **********  /src/componentes/HeaderComponent/LogoReactComponent.jsx  **********
//  *******************************************************************************


import logoReact from '../img/logoReact.svg';
//import '../css/logoReact.css';


export const LogoReactComponent = () => {

    return (

        <div className='logo-link'>
            <img src={logoReact} className="App-logo" alt="logo" />
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> React </a>
        </div>

    )
}