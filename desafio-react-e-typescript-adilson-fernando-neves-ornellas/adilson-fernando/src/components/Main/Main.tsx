import React from "react";

import "../../styles/Global.scss";
import "../../styles/Variaveis.scss";
import Newsletter from "./Newsletter";
import Router from "./Router";

import styles from  "../../styles/Main.module.scss";

import casinhaInstitucional from "../../assets/images/casinhaInstitucional.png";

const Main = () => {
  return (
      <main className={styles["main"]}>
        <a className={styles["link-casinha"]} href="/">
          <img className={styles["img-casinha"]} src={casinhaInstitucional} alt="Icone Casinha + Institucional" />
        </a>
        <h1 className={styles["main-titulo"]}>INSTITUCIONAL</h1>
        <Router />
        <Newsletter />
      </main>
  );
};

export default Main;
