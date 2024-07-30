//  *********************************************************************
//  **********  /src/componentes/AppTareasComponent/Tarea.jsx  **********
//  *********************************************************************

import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className="tarea-texto" onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos" onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className="tarea-icono" />
            </div>
        </div>
    );
};

export default Tarea;




// //  *********************************************************************
// //  **********  /src/componentes/AppTareasComponent/Tarea.jsx  **********
// //  *********************************************************************


// import { AiOutlineCloseCircle } from "react-icons/ai";


// const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {

   
//    return (

//       <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'} >

//          {/* -----  texto de la tarea y operaciones sobre la tarea  ----- */}
//          <div
//             className="tarea-texto"
//             onClick={() => completarTarea(id)}
//          >
//             {texto}

//          </div>

//          {/* -----  icono X o cerrar para cerrar una tarea  ----- */}
//          <div
//             className="tarea-contenedor-iconos"
//             onClick={() => eliminarTarea(id)}
//          >
//             <AiOutlineCloseCircle className="tarea-icono" />
//          </div>

//       </div>

//    )
// }


// export default Tarea;