import Testimonio from './Componentes/Testimonio';
import './App.css';

const datosTestimonio = [
  {
    imagen: "Shawn",
    nombre: "Shawn Wang",
    pais: "Singapur",
    cargo: "Ingeniero de Software en Amazon",
    testimonio: "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en     freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.",
  },
  {
    imagen: "Sarah",
    nombre: "Sarah Chima ",
    pais: "Nigeria",
    cargo: "Ingeniera de Software en ChatDesk",
    testimonio: "FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software.El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble. miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en     freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.",
  },
  {
    imagen: "Emma",
    nombre: "Emma Bostian",
    pais: "Suecia",
    cargo: "Ingeniera de Software en Spotify",
    testimonio: "Da Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify. cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en     freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.",
  },
]


function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <h1>Esto es lo que dicen nuestros alumnos sobre nosotros:</h1>

        {datosTestimonio.map((testimonio, index) => (
          <Testimonio
            key={index}
            imagen={testimonio.imagen}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            cargo={testimonio.cargo}
            testimonio={testimonio.testimonio}
          />
        ))}

      </div>
    </div>
  );
}

export default App;