import React, { useEffect, useState } from "react";
import axios from "axios"; // Certifique-se de instalar: npm install axios

function NavBar() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pedidos") // Ajuste a URL para corresponder ao backend
      .then((res) => setPedidos(res.data))
      .catch((err) => console.error("Erro ao buscar pedidos:", err));
  }, []);

  return (
    <nav className="navbar">
      <div className="container-top">
        <input className="Button-Login" type="button" value="Login" />
        <img
          className="bandeira"
          src="bandeira-da-italia.png"
          alt="Bandeira da Itália"
        />
      </div>
      <div className="logo-container">
        <img src="logoSemFundo.png" alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a className="link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Cardápio
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Promoções
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Contato
          </a>
        </li>
        <li>
          <a className="link" href="">
            Pedido
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
