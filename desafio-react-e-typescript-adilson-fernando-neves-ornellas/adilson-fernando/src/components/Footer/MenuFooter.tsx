import React from "react";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

import "../../styles/Global.scss";
import "../../styles/Variaveis.scss";

import facebook from "../../assets/logos/facebook.jpg"
import insta from "../../assets/logos/insta.jpg"
import twitter from "../../assets/logos/twitter.jpg"
import youtube from "../../assets/logos/youtube.jpg"
import linkedin from "../../assets/logos/linkedin.jpg"
import abrirMenu from "../../assets/images/abrirMenu.jpg"

import styles from  "../../styles/MenuFooter.module.scss";

const MenuFooter = () => {
  
    return (
      <div className={styles["menuFooter"]}>

        <div className={styles["menuFooter-mobile"]}>

        <Accordion>
            <AccordionItem>
                <AccordionHeader className={styles["accordion-button"]}>
                    <h1 className={styles[`accordion-title`]}>Institucional</h1>
                    <img className={styles[`accordion-img`]} src={abrirMenu} alt="Abrir menu" />
                </AccordionHeader>

                <AccordionBody className={styles["accordion-aberto"]}>
                    <div className="accordion-body">
                      <h2 className={styles["text-h2"]} >Quem Somos</h2>
                      <h2 className={styles["text-h2"]} >Política de Privacidade</h2>
                      <h2 className={styles["text-h2"]} >Segurança</h2>
                      <a className={styles["text-link"]} href="/">Seja um Revendedor</a>
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader className={styles["accordion-button"]}>
                    <h1 className={styles[`accordion-title`]}>Dúvidas</h1>
                    <img  className={styles[`accordion-img`]} src={abrirMenu} alt="Abrir menu" />
                </AccordionHeader>

                <AccordionBody className={styles["accordion-aberto"]}>
                    <div className="accordion-body">
                      <h2 className={styles["text-h2"]} >Entrega</h2>
                      <h2 className={styles["text-h2"]} >Pagamento</h2>
                      <h2 className={styles["text-h2"]} >Trocas e Devoluções</h2>
                      <a className={styles["text-link"]} href="/">Dúvidas Frequentes</a>
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader className={styles["accordion-button"]}>
                    <h1 className={styles[`accordion-title`]}>Fale Conosco</h1>
                    <img  className={styles[`accordion-img`]} src={abrirMenu} alt="Abrir menu" />
                </AccordionHeader>

                <AccordionBody className={styles["accordion-aberto"]}>
                    <div className="accordion-body">
                      <h2 className={styles["text-negrito"]} >Atendimento Ao Consumidor</h2>
                      <h2 className={styles["text-h2"]} >(11)4159 9504</h2>
                      <h2 className={styles["text-negrito"]} >Atendimento Online</h2>
                      <a className={styles["text-link"]} href="/">(11) 99433-8825</a>
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>

        <div>
          <div className={styles["conteiner-icons"]} >

            <a href="/">
              <img className={styles["icons"]} src={facebook} alt="facebook" />
            </a>
            <a href="/">
              <img className={styles["icons"]} src={insta} alt="instagran" />
            </a>
            <a href="/">
              <img className={styles["icons"]} src={twitter} alt="twitter" />
            </a>
            <a href="/">
              <img className={styles["icons"]} src={youtube} alt="youtube" />
            </a>
            <a href="/">
              <img className={styles["icons"]} src={linkedin} alt="linkedin" />
            </a>

          </div>
        </div>

        </div>

        <div  className={styles["menuFooter-desktop"]}>
          
          <div className={styles["desktop-institucional"]}>

            <h1 className={styles["text-h1"]} >INSTITUCIONAL</h1>
            <h2 className={styles["text-h2"]} >Quem Somos</h2>
            <h2 className={styles["text-h2"]} >Política de Privacidade</h2>
            <h2 className={styles["text-h2"]} >Segurança</h2>
            <a className={styles["text-link"]} href="/">Seja um Revendedor</a>

          </div>

          <div className={styles["desktop-duvidas"]}>

            <h1 className={styles["text-h1"]} >DÚVIDAS</h1>
            <h2 className={styles["text-h2"]} >Entrega</h2>
            <h2 className={styles["text-h2"]} >Pagamento</h2>
            <h2 className={styles["text-h2"]} >Trocas e Devoluções</h2>
            <a className={styles["text-link"]} href="/">Dúvidas Frequentes</a>

          </div>

          <div className={styles["desktop-faleConosco"]}>

            <h1 className={styles["text-h1"]} >FALE CONOSCO</h1>
            <h2 className={styles["text-negrito"]} >Atendimento Ao Consumidor</h2>
            <h2 className={styles["text-h2"]} >(11)4159 9504</h2>
            <h2 className={styles["text-negrito"]} >Atendimento Online</h2>
            <a className={styles["text-link"]} href="/">(11) 99433-8825</a>

          </div>

          <div className={styles["desktop-icons"]}>

            <div className={styles["conteiner-icons"]} >
              <a href="/">
                <img className={styles["icons"]} src={facebook} alt="facebook" />
              </a>
              <a href="/">
                <img className={styles["icons"]} src={insta} alt="instagran" />
              </a>
              <a href="/">
                <img className={styles["icons"]} src={twitter} alt="twitter" />
              </a>
              <a href="/">
                <img className={styles["icons"]} src={youtube} alt="youtube" />
              </a>
              <a href="/">
                <img className={styles["icons"]} src={linkedin} alt="linkedin" />
              </a>

              </div>

              <h2 className={styles["h2-icons"]} >www.loremipsum.com</h2>

          </div>

        </div>
        
      </div>
    );
  
  };
  
  export default MenuFooter;
  