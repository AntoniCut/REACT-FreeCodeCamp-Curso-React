//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import './App.css';
import { HeaderComponent } from './HeaderComponent/jsx/HeaderComponent';
import { AppMainComponent } from './AppMainComponent/AppMainComponent';


const App = () => {

   return (

      <div className="App">

         {/* **********  Aqui se Renderiza el Header o Cabecera  ********** */}
         <HeaderComponent />

         {/* **********  Aqui se Renderiza la Aplicación  ********** */}
         <AppMainComponent />
         
      </div>

   );
}

export default App;
