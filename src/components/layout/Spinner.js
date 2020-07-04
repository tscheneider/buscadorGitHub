import React, { Fragment } from "react"; /**Padrão do react + Fragment */
import spinner from "./spinner.gif"; /**Importa o gif de carregamento */

/* Função do gif de carregamento */
const Spinner = () => (
  <Fragment>
    {" "}
    {/*Utilizado como uma div  */}
    <img
      src={spinner} /*Carrega a imagem */
      alt="Loading..."
      /*Define tamanho da imagem gif */
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);
/*Permite exportar a função Spinner */
export default Spinner;
