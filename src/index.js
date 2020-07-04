import React from "react"; /* import padrão */
import ReactDOM from "react-dom"; /* import de manipulação de interface */
import App from "./App"; /* Importa itens de App.js */

/* Essa função é a responsavel por gerar a página
 */
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Chama os itens a partir de app.js */}
  </React.StrictMode>,
  document.getElementById("app")
);
