//  *************************************************************************
//  **********  /src/componentes/AppTareasComponent/AppTareas.jsx  **********
//  *************************************************************************


import ListaDeTareas from "./ListaDeTareas";


export const AppTareas = () => {

    return (

        <section className='aplicacion-tareas'>
         
            <div className='tareas-lista-principal'>
                
                <h1> Mis Tareas </h1>
                {/* <Tarea texto='Aprender React' /> */}
                <ListaDeTareas />

            </div>

        </section>
    )
}