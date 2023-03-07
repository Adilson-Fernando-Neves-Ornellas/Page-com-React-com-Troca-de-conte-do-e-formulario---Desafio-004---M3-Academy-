import React, { useState } from "react";

import Header from "../components/Header/Header";
import Whatsapp from "../components/Whatsapp";
import MenuHamburguer from "../components/Header/MenuHamburguer";
import Main from "../components/Main/Main";
import ButtonTop from "../components/buttonTop";
import Footer from "../components/Footer/Footer";


const Home = () => {
  const [openModal , setOpenModal] = useState(false)
  return (
    <div>
      <Header handleOpenModal={() => setOpenModal(true)}/>
      <Whatsapp />
      <MenuHamburguer isOpen={openModal} onRequestClose={() => setOpenModal(false)} />
      <Main />
      <ButtonTop />
      <Footer />
    </div>
  );
};

export default Home;
