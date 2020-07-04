import React, {
  Fragment,
} from "react"; /* Importa itens do React e o Fragment */
import Search from "../users/Search"; /* Importa barra de pesquisa */
import Users from "../users/Users"; /* Importa o users para que seja */

/* Renderiza a página inicial */
const Home = () => (
  <Fragment>
    {" "}
    {/* Agrupa esse trecho de código */}
    <Search /> {/* Chama e coloca a barra de pesquisa */}
    <Users />{" "}
    {/* Chama e coloca os usuários. Obs:  Se não tiver 
    nenhuma usuário sendo buscado essa parte estará em branco */}
  </Fragment>
);

export default Home;
