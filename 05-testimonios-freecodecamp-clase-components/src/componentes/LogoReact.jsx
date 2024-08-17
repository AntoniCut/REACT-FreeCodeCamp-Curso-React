//  ******************************************************
//  **********  /src/componentes/logoReact.jsx  **********
//  ******************************************************


import React from 'react'
import logo from '../logo.svg';


//  **********  Componente 'LogoReact()'  **********

const LogoReact = () => {

    return (
        <div className="App">
            <img src={logo} className="App-logo-central" alt="logo" />
        </div>
    )   

}


export default LogoReact;
