import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container-top">
        <input className="Button-Login" type="button" value="Login" />
        <img className="bandeira" src="bandeira-da-italia.png" alt="" />
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
          <a className="link" href="#">
            Pedido
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
