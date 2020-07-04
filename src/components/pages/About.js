import React, { Fragment } from "react"; /** Padrão  do react*/

/* Trás informações sobre a página */
const About = () => {
  return (
    <Fragment>
      {" "}
      {/* Agrupa o trecho de código abaixo */}
      <h1>Sobre esse aplicativo</h1> {/* Titulo */}
      <p>App para buscar Usuários do GitHub</p> {/* escreve na tela */}
      <p>Version: 1.1.0</p> {/* escreve na tela */}
    </Fragment>
  );
};

export default About;
