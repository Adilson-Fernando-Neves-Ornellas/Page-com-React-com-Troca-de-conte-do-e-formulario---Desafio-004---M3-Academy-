import React from "react";

import "../../styles/Global.scss";
import "../../styles/Variaveis.scss";

import styles from  "../../styles/Newsletter.module.scss";

const Newsletter = () =>{
    return (
        <div className={styles["newsletter"]}>
            <hr className={styles["newsletter-hr"]} />
            <div className={styles["newsletter-div1"]} >
                <h2 className={styles["newsletter-div1-titulo"]}>ASSINE NOSSA NEWSLETTER</h2>
            </div>
            <div className={styles["newsletter-div2"]}>
                <input className={styles["newsletter-div2-input"]} type="email" name="E-mail" id="E-mail" placeholder="   E-mail" />
                <button className={styles["newsletter-div2-button"]}>ENVIAR</button>
            </div>
            <hr className={styles["newsletter-hr"]} />
        </div>
    );
};

export default Newsletter;