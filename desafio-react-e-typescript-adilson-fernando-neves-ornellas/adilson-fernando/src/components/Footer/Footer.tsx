import React from "react";

import "../../styles/Global.scss";
import "../../styles/Variaveis.scss";

import mastercard from "../../assets/icons/mastercard.jpg"
import visa from "../../assets/icons/visa.jpg"
import american from "../../assets/icons/american.jpg"
import elo from "../../assets/icons/elo.jpg"
import hipercard from "../../assets/icons/hipercard.png"
import paypal from "../../assets/icons/paypal.jpg"
import boleto from "../../assets/icons/boleto.jpg"
import barravertical from "../../assets/icons/barravertical.jpg"
import vtexcertificado from "../../assets/icons/vtexcertificado.jpg"
import logoVtex from "../../assets/logos/logoVtex.png"
import logoM3 from "../../assets/logos/logoM3.jpg"

import styles from  "../../styles/Footer.module.scss";
import MenuFooter from "./MenuFooter";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <MenuFooter/>
      <div className={styles["conteiner-info"]}>
        
        <div className={styles["info-text-desktop"]}>
          <h2 className={styles["text-h2"]}>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
          <h2 className={styles["text-h2"]}>Elit, sed do eiusmod tempor</h2>
        </div>

        <div className={styles["info-icons"]}>
          <img className={styles["img-icons"]} src={mastercard} alt="mastercard" />
          <img className={styles["img-icons"]} src={visa} alt="visa" />
          <img className={styles["img-icons"]} src={american} alt="american" />
          <img className={styles["img-icons"]} src={elo} alt="elo" />
          <img className={styles["img-icons"]} src={hipercard} alt="hipercard" />
          <img className={styles["img-icons"]} src={paypal} alt="paypal" />
          <img className={styles["img-icons"]} src={boleto} alt="boleto" />
          <img className={styles["img-icons-barra"]} src={barravertical} alt="barravetical" />
          <img className={styles["img-icons-vtex"]} src={vtexcertificado} alt="vtex certivicado" />
        </div>

        <div className={styles["info-text-mobile"]}>
          <h2 className={styles["text-h2-mobile"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. .</h2>
        </div>

        <div className={styles["info-devs"]}>
          <p className={styles["info-devs-p"]}>Powered by</p>
          <img className={styles["info-devs-imgvtex"]} src={logoVtex} alt="logoVtex" />
          <p className={styles["info-devs-p"]}>Developed by</p>
          <img className={styles["info-devs-imgm3"]} src={logoM3} alt="logoM3" />
        </div>

      </div>
    </footer>
  );

};

export default Footer;
