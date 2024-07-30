//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import './App.css';

import { HeaderComponent } from './componentes/HeaderComponent/jsx/HeaderComponent';
import { AppTareas } from './componentes/AppTareasComponent/AppTareas';


const App = () => {

   return (
      <div className="App">

         {/* **********  Cabecera con los Logos y el Titulo del Proyecto  ********** */}
         <HeaderComponent />

         {/* **********  Aqui se Renderiza nuestra Aplicación  ********** */}
         <AppTareas />

      </div>
   );
}


export default App;

