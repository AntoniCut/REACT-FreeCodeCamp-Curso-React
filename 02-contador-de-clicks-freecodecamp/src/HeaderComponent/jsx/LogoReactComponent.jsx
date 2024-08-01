//  *******************************************************************************
//  **********  /src/componentes/HeaderComponent/LogoReactComponent.jsx  **********
//  *******************************************************************************


import logoReact from '../img/logoReact.svg';
//import '../css/logoReact.css';


export const LogoReactComponent = () => {

    return (

        <div className="app-logo-react-container">
            <img src={logoReact} className="app-logo-react" alt="logo" />
            <a className="react-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> React </a>
        </div>

    )
}