import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from "../../styles/Contato.module.scss";
import ContatoShema from "./ContatoSchema";

interface IFormikValues {
  nome: string;
  email: string;
  cpf: string;
  data: string;
  telefone: string;
  insta: string;
  checkbox: string;
}

const initialValues = {
  nome: "",
  email: "",
  cpf: "",
  data: "",
  telefone: "",
  insta: "",
  checkbox: "",
};

const Contato = () => {
  const handleFormikSubmit = (values: IFormikValues) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        onSubmit={handleFormikSubmit}
        initialValues={initialValues}
        validationSchema={ContatoShema}
      >
        <Form className={styles["div-formulario"]}>
          <h1 className={styles["formulario-titulo"]}>Preencha o formulário</h1>

          <div className={styles["formulario-input"]}>
            <div className={styles["input-text"]}>
              <h2 className={styles["input-title"]}>Nome</h2>
              <ErrorMessage
                component="p"
                name="nome"
                className={styles["input-invalid"]}
              />
            </div>
            <label className={styles["input-label"]} htmlFor="nome"></label>
            <Field
              className={styles["input-field"]}
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
            />
          </div>

          <div className={styles["formulario-input"]}>
            <div className={styles["input-text"]}>
              <h2 className={styles["input-title"]}>E-mail</h2>
              <ErrorMessage
                component="p"
                name="email"
                className={styles["input-invalid"]}
              />
            </div>
            <label htmlFor="email"></label>
            <Field
              className={styles["input-field"]}
              id="email"
              name="email"
              placeholder="Seu e-mail"
            />
          </div>

          <div className={styles["formulario-input"]}>
            <div className={styles["input-text"]}>
              <h2 className={styles["input-title"]}>CPF</h2>
              <ErrorMessage
                component="p"
                name="cpf"
                className={styles["input-invalid"]}
              />
            </div>
            <label className={styles["input-label"]} htmlFor="cpf"></label>
            <Field
              className={styles["input-field"]}
              id="cpf"
              name="cpf"
              placeholder="000.000.000-00"
            />
          </div>

          <div className={styles["formulario-input"]}>
            <div className={styles["input-text"]}>
              <h2 className={styles["input-title"]}>Data de Nascimento</h2>
              <ErrorMessage
                component="p"
                name="data"
                className={styles["input-invalid"]}
              />
            </div>
            <label className={styles["input-label"]} htmlFor="data"></label>
            <Field
              className={styles["input-field"]}
              id="data"
              name="data"
              placeholder="00.00.0000"
            />
          </div>

          <div className={styles["formulario-input"]}>
            <div className={styles["input-text"]}>
              <h2 className={styles["input-title"]}>Telefone</h2>
              <ErrorMessage
                component="p"
                name="telefone"
                className={styles["input-invalid"]}
              />
            </div>
            <label className={styles["input-label"]} htmlFor="telefone"></label>
            <Field
              className={styles["input-field"]}
              id="telefone"
              name="telefone"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className={styles["formulario-input"]}>
            <div className={styles["input-text"]}>
              <h2 className={styles["input-title"]}>Instagram</h2>
            </div>
            <label className={styles["input-label"]} htmlFor="insta"></label>
            <Field
              className={styles["input-field"]}
              id="insta"
              name="insta"
              placeholder="@seuuser"
            />
          </div>

          <div className={styles["formulario-checkbox"]}>
            <ErrorMessage
              component="p"
              name="checkbox"
              className={styles["input-invalid"]}
            />
            <a className={styles["checkbox-link"]} href="/contato">
              Declaro que li e aceito
            </a>
            <Field
              className={styles["formulario-field"]}
              type="checkbox"
              id="checkbox"
              name="checkbox"
            />
          </div>

          <button className={styles["button"]} type="submit">
            CADASTRA-SE
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Contato;
