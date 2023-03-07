import React from "react";

import "../../styles/Global.scss";
import "../../styles/Variaveis.scss";

import styles from "../../styles/Header.module.scss";

import logoM3Academy from "../../assets/logos/Logo-M3Academy.jpg";
import lupaBuscar from "../../assets/images/lupaBuscar.png";
import iconeMenu from "../../assets/images/MenuHamburguer.jpg";
import carrinhoCompra from "../../assets/images/carrinhoCompra.png";

interface HeaderProps {
  handleOpenModal:() => void;
}

const Header = ({handleOpenModal}:HeaderProps) => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-top"]}>
        <div className={styles["top-inputMenu"]}>
          <button
            className={styles["inputMenu-button"]}
            onClick={handleOpenModal}
          >
            <img
              className={styles["inputMenu-Img"]}
              src={iconeMenu}
              alt="Icone Menu"
            />
          </button>
        </div>

        <div className={styles["top-logo"]}>
          <a href="/">
            <img
              className={styles["logo-Academy"]}
              src={logoM3Academy}
              alt="logo M3 Academy"
            />
          </a>
        </div>

        <div className={styles["top-buscar"]}>
          <input
            className={styles["buscar-input"]}
            type="text"
            placeholder="  Buscar"
          />
          <button className={styles["buscar-button"]}>
            <img
              className={styles["buscar-lupa"]}
              src={lupaBuscar}
              alt="LupaBuscar"
            />
          </button>
        </div>

        <div className={styles["top-entrarCarrinho"]}>
          <h2 className={styles["entrarCarrinho-texto"]}>
            <a className={styles["entrarCarinho-texto-a"]} href="/">ENTRAR</a>
          </h2>
          <a href="/">
            <img
              className={styles["entrarCarrinho-img"]}
              src={carrinhoCompra}
              alt="carrinhoCompra"
            />
          </a>
        </div>
      </div>

      <div className={styles["header-navBar"]}>
        <ul className={styles["navBar-Ul"]}>

          <li className={styles["navBar-Li"]}>
            <a className={styles["navBar-Li-a"]} href="/">CURSOS</a>
          </li>

          <li className={styles["navBar-Li"]}>
            <a className={styles["navBar-Li-a"]} href="/">SAIBA MAIS</a>
          </li>

          <li className={styles["navBar-Li"]}>
            <a className={styles["navBar-Li-a"]} href="/">INSTITUCIONAIS</a>
          </li>
        </ul>
      </div>

      <div className={styles["top-buscarMobile"]}>
        <input
          className={styles["buscarMobile-input"]}
          type="text"
          placeholder="  Buscar"
        />
        <button className={styles["buscarMobile-button"]}>
          <img
            className={styles["buscarMobile-lupa"]}
            src={lupaBuscar}
            alt="LupaBuscar"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
