import React from "react";

function Principal() {
  return (
    <div className="Container-Header">
      <div className="Container-Produto">
        <div className="Produtos">
          <img className="pizza" src="pizza1.png"></img>
          <h1>Pizzas</h1>
        </div>
        <div className="Produtos">
          <img className="calzone" src="calzone.webp"></img>
          <h1>Calzones</h1>
        </div>
        <div className="Produtos">
          <img className="macarrao" src="macarrao.png"></img>
          <h1>Massas</h1>
        </div>
        <div className="Produtos">
          <img className="Bebidas" src="coca3.png"></img>
          <h1>Bebidas</h1>
        </div>
        <div className="Produtos">
          <img className="pizza-doce" src="pizza-doce.png"></img>
          <h1>Doces</h1>
        </div>
      </div>
    </div>
  );
}

export default Principal;
