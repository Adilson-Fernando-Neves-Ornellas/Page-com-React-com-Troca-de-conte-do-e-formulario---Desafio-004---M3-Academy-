import React from "react";

import "../../styles/Global.scss";
import "../../styles/Variaveis.scss";
import Modal from "react-modal";
import styles from "../../styles/Hamburguer.module.scss";

import fecharMenu from "../../assets/images/fecharMenu.jpg"

interface MenuHamburguerProps {
    isOpen:boolean;
    onRequestClose: () => void;
}

function MenuHamburguer ({isOpen, onRequestClose}:MenuHamburguerProps){
    
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={styles['modal-overlay']}
        className={styles['modal']}
        ariaHideApp={false}
        >
        <div className={styles["menuHamburguer"]} >
            <div className={styles["div-entrar"]}>
                <h2 className={styles["entrar-texto"]}>
                    <a className={styles["entrar-texto-a"]} href="/">ENTRAR</a>
                </h2>
                <button onClick={onRequestClose}>
                    <img className={styles["entra-img"]} src={fecharMenu} alt="Fechar Menu" />
                </button>
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
        </div>
        </Modal>

    );

}

export default MenuHamburguer;
