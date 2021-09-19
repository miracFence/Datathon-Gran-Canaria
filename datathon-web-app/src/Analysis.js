import React, { Component } from "react";
import ImageSlider from "./components/imageSlider";
import { SliderData } from "./components/SliderData";

function Analysis() {
    return (
      <div className="analysis">
        <h1 className="title">Análisis realizados con EDA en Python</h1>
        <p className="parag">
          En esta parte podemos observar la manera en que se relacionan los
          datos y aspectos más importantes de la aplicación de negocio
        </p>
        <div className="slider">
        <ImageSlider className= "actualSlider" slides={SliderData}/>
        </div>
      </div>
    );
}

export default Analysis;
