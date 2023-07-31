import React from "react";
import bgImage from "../../imagenes/fondos/imgFondo3.jpg";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="container py-2">
      <img className="bg-img" src={bgImage} alt="Bg" />
      <h1>Bienvenidx</h1>
    </div>
  );
};

export default Menu;
