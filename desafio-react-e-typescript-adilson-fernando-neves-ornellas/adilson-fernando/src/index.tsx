// Esssencias
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";

// Projeto Adilson
import Home from "./pages/Home";

// Função do que deve aparecer 
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render( 
  <React.StrictMode>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </React.StrictMode>
);
