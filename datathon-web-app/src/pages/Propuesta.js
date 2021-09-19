import React from 'react';
import ImageSlider from "../components/imageSlider";
import { SliderData2 } from "../components/SliderData2";
import bg1 from "../images/bg1.jpg"
import bg2 from "../images/bg2.jpg"
import bg3 from "../images/bg3.jpg"
import bg4 from "../images/bg4.jpg"
import bg5 from "../images/bg5.jpg"
import bg6 from "../images/bg6.jpg"
import bg7 from "../images/bg7.jpg"

function Propuesta() {
  return (
    <div className='propuesta'>
      <div class="mainDiv container-fluid">
      <div class="propDiv" style={{ backgroundImage: `url(${bg1})`, color: 'white' }}>
        <div class="container p-3">
        <h1>Descripcion general</h1>
        <p>Esta es una propuesta de negocio que busca mejorar la calidad de la experiencia de los turistas, buscando la manera de maximizar la personalización de cada viaje que realice actividades culturales que representan la grandeza natural y cultural de Gran Canaria, a la vez que se cuida al medio ambiente en el proceso (Ecotourism).</p>
        </div>
      </div>
      <div class="propDiv" style={{ backgroundImage: `url(${bg2})`, color: 'white' }}>
        <div class="container p-3">
        <h1>Metas</h1>
        <ul>
          <li>Maximizar la personalización de la experiencia del turista por medio de sus preferencias y disgustos.</li>
          <li>Lograr la facilitación de búsqueda de hoteles verdes  y actividades ecológicas que permitan de disfrutar de la estancia y naturaleza que ofrece Gran Canaria.</li>
          <li>Conseguir que la experiencia del usuario sea lo más segura y satisfactoria posible, todo por medio del perfil del turista.</li>
          <li>Incrementar la cantidad de turistas en las temporadas donde tradicionalmente hay poco turismo.</li>
        </ul>
        </div>
      </div>
      <div class="propDiv" style={{ backgroundImage: `url(${bg3})`, color: 'black' }}>
        <div class="container p-3">
        <h1>Valor de negocio</h1>
        <p>Como equipo, consideramos que una de los puntos más fuertes de nuestra propuesta es la capacidad de poder brindar una experiencia que se adapte a las necesidades de cualquier tipo de turista que se interese en Gran Canaria o que incluso ya esté dentro de la isla. Con ello, la isla Gran Canaria, tendrán clientes con mayor índice de satisfacción a la hora de comprar actividades en zonas específicas, todo al mismo tiempo que se preserva el medio ambiente y las oportunidades de los negocios locales, a la vez que se maximiza el conocimiento y actividades que se puedan realizar de manera natural en el ecosistema de Gran Canaria.</p>
        </div>
      </div>
      <div class="propDiv" style={{ backgroundImage: `url(${bg4})`, color: 'black' }}>
        <div class="container p-3">
        <h1>Funcionamiento y ventajas</h1>
        <p>La aplicación tendría como objetivo minimizar la cantidad de inputs pedidos al usuario a la hora de poder crear una propuesta de evento/actividad/lugar al cual asistir, todo de acuerdo a las preferencias del usuario, siempre procurando la prioridad de realización de actividades que preserven al medio ambiente y animar al turista a convivir con la cultura y naturaleza de Gran Canaria.</p>
        </div>
      </div>
      <div class="propDiv" style={{ backgroundImage: `url(${bg5})`, color: 'black' }}>
        <div class="container p-3">
        <h1>Estrategias</h1>
        <ul>
          <li>Hacer página web que basado en experiencias y gustos te de resultados acordes.</li>
          <li>Sugerir que se hagan hoteles verdes ya que son bastante populares en el sector de población turista más común en gran canaria.</li>
          <li>Para que la experiencia sea segura y satisfactoria, se pueden hacer espacios seguros para mujeres. por ejemplo: playas solo para mujeres. actividades solo para mujeres.</li>
          <li>Salones con computadoras y materiales para que los niños puedan tomar sus clases (opcional un maestro de kinder para apoyar a los niños con sus clases).</li>
        </ul>
        </div>
      </div>
      <div class="propDiv" style={{ backgroundImage: `url(${bg6})`, color: 'black' }}>
        <div class="container p-3">
        <h1>Plan de accion</h1>
        <p>El plan de accion esta previsto para ser concluido en 6 meses.</p>
        <p>Meses 1-2:<br/>
        Hacer un sitio web profecional y aplicacion de mobil, publicitar en redes sociales islas canarias y dirigir directamente al sitio web o a la aplicacion mobil respectivamente.<br/>
        Convencer a inversionistas de hacer hoteles verdes con una estrategia de negocio rentable( ya que no son muy caros de hacer y terminan siendo bastante rentables)<br/>
        Hacer los espacios seguros para mujeres y jovencitas. que le daria confianza a mujeres que se quieren divertir y no quieren ser molestadas o acosadas por hombres.<br/>
        Hacer los salones con computadoras y profesores de apoyo para que los ninos puedan tomar clases y que no sea un empedimiento la disponibilidad de clases de calidad a distancia para salir de vacaciones</p>
        <p>Meses 3-6:<br/>
        Seguir con los puntos ya establecidos y agregar los hoteles verdes a la pagina web</p>
        </div>
      </div>
      <div className="slider" class="propDiv" style={{ backgroundColor: 'lightblue', color: 'black' }}>
        <div class="container p-3">
        <ImageSlider className= "actualSlider" slides={SliderData2}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Propuesta;
