import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";

import "../../styles/Global.scss";
import "../../styles/Variaveis.scss";

import styles from "../../styles/Router.module.scss";
import barraVertical from "../../assets/icons/barravertical.jpg";

import Sobre from "./Sobre";
import FormaDePagamento from "./FormaDePagamento";
import Entrega from "./Entrega";
import Troca from "./Troca";
import Segurança from "./Segurança";
import Contato from "./contato";

const Router = () => {
  return (
    <div className={styles["meio"]}>

      <nav className={styles["meio-links"]}>

        <ul className={styles["links-ul"]}>

          <li className={styles["links-ul-li"]}>
            <NavLink className={styles["li-a"]} to="/" style={({ isActive }) => ({
            color: isActive ? "#fff" : "#7d7d7d",
            background: isActive ? "#000000" : "unset",
            fontWeight: isActive ? "700" : "400",
            })}> Sobre</NavLink>
          </li>

          <li className={styles["links-ul-li"]}>
            <NavLink className={styles["li-a"]} to="/formadepagamento" style={({ isActive }) => ({
            color: isActive ? "#fff" : "#7d7d7d",
            background: isActive ? "#000000" : "unset",
            fontWeight: isActive ? "700" : "400",
            })} > Forma De Pagamento</NavLink>
          </li>

          <li className={styles["links-ul-li"]}>
            <NavLink className={styles["li-a"]} to="/entrega" style={({ isActive }) => ({
            color: isActive ? "#fff" : "#7d7d7d",
            background: isActive ? "#000000" : "unset",
            fontWeight: isActive ? "700" : "400",
            })}> Entrega</NavLink>
          </li>

          <li className={styles["links-ul-li"]}>
            <NavLink className={styles["li-a"]} to="/troca" style={({ isActive }) => ({
            color: isActive ? "#fff" : "#7d7d7d",
            background: isActive ? "#000000" : "unset",
            fontWeight: isActive ? "700" : "400",
            })}> Troca</NavLink>
          </li>

          <li className={styles["links-ul-li"]}>
            <NavLink className={styles["li-a"]} to="/segurança" style={({ isActive }) => ({
            color: isActive ? "#fff" : "#7d7d7d",
            background: isActive ? "#000000" : "unset",
            fontWeight: isActive ? "700" : "400",
            })}> Segurança</NavLink>
          </li>

          <li className={styles["links-ul-li"]}>
            <NavLink className={styles["li-a"]} to="/contato" style={({ isActive }) => ({
            color: isActive ? "#fff" : "#7d7d7d",
            background: isActive ? "#000000" : "unset",
            fontWeight: isActive ? "700" : "400",
            })}> Contato</NavLink>
          </li>

        </ul>
      </nav>
      <div className={styles["div-barra"]}>
        <img className={styles["barra"]} src={barraVertical} alt="barraVertical" />
      </div>
      <Routes>
        <Route element={<Sobre />} path="/" />
        <Route element={<FormaDePagamento />} path="/formadepagamento" />
        <Route element={<Entrega />} path="/entrega" />
        <Route element={<Troca />} path="/troca" />
        <Route element={<Segurança />} path="/segurança" />
        <Route element={<Contato />} path="/contato" />
      </Routes>
    </div>
  );
};

export default Router;
