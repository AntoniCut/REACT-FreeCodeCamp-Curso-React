//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import LogoReact from './componentes/LogoReact'
import { Testimonio } from './componentes/Testimonio'
import './App.css';


//  **********  Componente Principal (PADRE) de la Aplicacion  **********
const App = () => {

    return (

        <div className="App">

            <LogoReact/>
            
            <div className='contenedor-principal'>
                
                
                <h1> Here is what our alumni say about freeCodeCamp: </h1>
                

                <Testimonio
                    nombre='Shawn Wang'
                    pais='Singapur'
                    imagen='shawn'
                    cargo='Ingeniero de Software'
                    empresa='Amazon'
                    testimonio={
                        <>
                            Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando en los cientos de horas de lecciones gratuitas 
                            en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. 
                            <strong> freeCodeCamp cambió mi vida. </strong>
                        </>
                    }
                />

                <Testimonio
                    nombre='Sarah Chima'
                    pais='Nigeria'
                    imagen='sarah'
                    cargo='Ingeniero de Software'
                    empresa='ChatDesk'
                    testimonio={
                        <>
                            <strong> freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. </strong> El plan de estudios bien estructurado llevó mis conocimientos de codificación de un nivel principiante total a un nivel de mucha confianza. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble.
                        </>
                    }
                />

                <Testimonio
                    nombre='Emma Bostian'
                    pais='Suecia'
                    imagen='emma'
                    cargo='Ingeniero de Software'
                    empresa='Spotify'
                    testimonio={
                        <>
                            Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
                            Estudiar JavaScript, así como estructuras de datos y algoritmos en
                            <strong> freeCodeCamp, me dio las habilidades y la confianza </strong> que necesitaba para conseguir el trabajo de
                            mis sueños como ingeniero de software en Spotify.'
                        </>
                    }
                />

            </div>

        </div>
    )
}


export default App
