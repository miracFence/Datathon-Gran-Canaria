import React from "react";
import { Card } from "react-bootstrap";
import eco from '../images/hotel_eco.jpg';
import senderismo from "../images/senderismo.jpg";

const Introduction = () => {
  return (
    <>
    <div class="row">
      <Card className="card">
        <Card.Img variant="top" src={eco} />
        <Card.Body>
          <Card.Text>
            Gran Canaria es un centro de oportunidad para las personas que buscan un lugar en donde convivir con la naturaleza de manera tranquila, 
            siempre preservando el medio ambiente. 
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className="card">
        <Card.Body>
          <Card.Text>
            Se cuenta con actividades como senderismo, surf, buceo, paseo en camello, paseo en bicicleta y más formas de interactuar de manera tranquila con la naturaleza. 
            Esto no sólo genera una oportunidad de negocio aun más explotable para Gran Canaria, sino que permite establecer nuevas formas de personalizar los 
            viajes de los turistas tomando en cuenta sus preferencias
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={senderismo} />
      </Card>
      </div>
    </>
  );
};

export default Introduction;
