import React from "react";
import { Card } from "react-bootstrap";
import eco from "../images/hotel_eco.jpg";
import senderismo from "../images/senderismo.jpg";
import tech from '../images/tech.jpg';
import saveWorld from '../images/save_world.jpg';

const Introduction = () => {
  return (
    <>
      <div class="row">
        <Card className="card">
          <Card.Img variant="top" src={eco} />
          <Card.Body>
            <Card.Text>
              Gran Canaria es un centro de oportunidad para las personas que
              buscan un lugar en donde convivir con la naturaleza de manera
              tranquila, siempre preservando el medio ambiente.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className="card">
          <Card.Body>
            <Card.Text>
              Se cuenta con actividades como senderismo, surf, buceo, paseo en
              camello, paseo en bicicleta y más formas de interactuar de manera
              tranquila con la naturaleza. Esto no sólo genera una oportunidad
              de negocio aun más explotable para Gran Canaria, sino que permite
              establecer nuevas formas de personalizar los viajes de los
              turistas tomando en cuenta sus preferencias
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={senderismo} />
        </Card>
      </div>
      <div class="row">
        <Card className="card">
          <Card.Body>
            <Card.Text>
              Las aplicaciones web y móviles son fundamentales en la modernización del mundo, 
              por lo tanto buscamos la personalización de la experiencia del turista que 
              visite Gran Canaria, así enriqueciendo su estancia
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={tech} />
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={saveWorld} />
          <Card.Body>
            <Card.Text>
              El futuro de Gran Canaria es verde, por lo tanto es importante tomar medidas que también aseguren
              la seguridad de los turistas y del medio que les rodea, sin nunca perjudicar su experiencia
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Introduction;
