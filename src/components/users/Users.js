import React, { useContext } from "react"; /**import Padrão */
/* Precisa importar o UserItem para pegar informações login e avatar_url */
import UserItem from "./UserItem";
/* Esse import trás a tela o icone de carregamentos */
import Spinner from "../layout/Spinner";
/* Importa os Gitcontext que possui as funções e os estados*/
import GithubContext from "../../context/github/githubContext";

/*Função que apresenta uma página com "varios " usuários buscados
users e loading são definidos abaixo*/
const Users = () => {
  /**
   * O useContext do Hook torna as coisas muito mais agradáveis ​​e
   *  diretas, para acessar os estado.
   */
  //para buscar as funções e estados do github
  const githubContext = useContext(GithubContext);
  //destruct para usar o hook. (githubContext.loading)
  const { loading, users } = githubContext;

  /* Verifica se o carregamento está como true e se tiver 
  retorna Spinner */
  if (loading) {
    return (
      <Spinner />
    ); /* Componente que cria o gif de carregamento (foi importado) */
  } else {
    /* Se o carregamento estiver em falso significa que deve ser apresentado na tela os usuários */
    return (
      /*  Como não é um style que temos em nosso css criamos
       uma classe userStyle em baixo */
      <div style={userStyle}>
        {/*Passamos por todos os usuários e pegamos seu id e seu nome de usuario */}
        {/* githubContext.users.map((user)) */}
        {users.map((user) => (
          /* Mostramos então cada usuário */
          /* ao passar para userItem o login=key e avatar_url=user */
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

/* Define o estilo da página onde é realizada a busca de vários
usuarios */
const userStyle = {
  display: "grid" /**Deixa um item do lado do outro */,
  gridTemplateColumns: "repeat(3, 1fr)" /* define 3 colunas */,
  gridGap: "1rem",
};
export default Users;
