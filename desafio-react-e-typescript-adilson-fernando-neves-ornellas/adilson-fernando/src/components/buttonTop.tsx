import React, { useEffect, useState } from "react";
import "../styles/Global.scss";
import "../styles/Variaveis.scss";

import buttonTop from "../assets/images/buttonTop.svg"

import styles from  "../styles/ButtonTop.module.scss";

const ButtonTop = () =>{

    const [position, setPosition] = useState(0);
    
    useEffect(() => {
      window.addEventListener("scroll", finaPage);
    }, []);
    
    function finaPage() {
      setPosition(window.scrollY);
    }
    
    function toTop(){
      setPosition(0);
      window.scrollTo(0,0);
    }
    
    if (position > 200) {
      return (
        <div className={styles["button-Top"]} onClick={toTop}>
          <img className={styles["Top-img"]} src={buttonTop} alt="Button voltar ao inicio" />
        </div>
      );
    } else return (null);
};

export default ButtonTop;
