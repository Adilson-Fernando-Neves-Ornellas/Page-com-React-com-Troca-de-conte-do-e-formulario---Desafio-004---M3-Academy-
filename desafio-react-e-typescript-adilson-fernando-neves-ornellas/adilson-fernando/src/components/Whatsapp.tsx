import React from "react";

import "../styles/Global.scss";
import "../styles/Variaveis.scss";

import whatsapp from '../assets/icons/whatsapp.svg'

import styles from  "../styles/Whatsapp.module.scss";

const Whatsapp = () =>{
    return (
        <div className={styles["div-whatsapp"]}>
        <a className={styles["whatsapp-link"]} href="https://api.whatsapp.com/send?phone=0000000000000&text=Olá, Tudo Bem?" target="_blank" rel="noreferrer">
          <img className={styles["whatsapp-icon"]} src={whatsapp} alt="Whatsapp" />
        </a>
      </div>
    );
};

export default Whatsapp;