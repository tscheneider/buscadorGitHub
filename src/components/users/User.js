import React, {
  Fragment,
  useEffect /* Hook que realiza a renderizar dos componente.*/,
  useContext /* Hook que retorna o valor atual do contexto*/,
} from "react"; /* Padrõ do react + component que cria os componentes */
import Spinner from "../layout/Spinner"; /**Importa o componente gif que apresenta o carregamento da página */
import Repos from "../repos/Repos"; /* Importa de Repos.js */
import { Link } from "react-router-dom"; /* Link utilizado para definir o reteamento do router dom  */
import GithubContext from "../../context/github/githubContext";

/* Função que apresenta cada item dos usuários e apresenta a página de cada 
usuario */
const User = (match) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  /* É responsável pela montagem das páginas substitui o componentDidMount() */
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //para que a mensagem de atenção desapareça do console temos que adicionar a linha comentada abaixo
    //eslint-disable-next-line
    //Use os [] em casos de depêndencia que faça ele ser carregado ou continue causando loop infinito
  }, []); //definimos que o gif de carregamento desapareça e apareça o perfil do usuário

  /*desestrutura todos os componentes que existem em cada usuário */
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  /* verifica se o carregamento é true */
  if (loading) return <Spinner />; //se sim carrega o spinner.js
  return (
    <Fragment>
      {" "}
      {/* Cria toda o corpo da  página onde temos os dados do usuario buscado */}
      <Link to="/" className="btn btn-light">
        {" "}
        {/* cria um botão com link para a pagina principal "/" */}
        Voltar para Busca {/* esse é o nome do botão */}
      </Link>
      Alocado: {""} {/* define alocado como vazio */}
      {/*Escreve o Hireable e seu icone quando clicado. Se achou o perfil na api o v se não achou x */}
      {hireable ? (
        <i className="fas fa-check text-sucess" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      {/* define uma divisão co nome, avatar e localização */}
      <div className="card grid 2">
        <div className="all-center">
          {" "}
          {/* estilo css */}
          {/*  Coloca o avatar na página */}
          <img
            src={avatar_url} /* define a imagem */
            className="round-img" /* define a imagem como redonda */
            alt=""
            style={{ width: "150px" }} /* define tamanho da imagem */
          />
          <h1>{name}</h1> {/* Coloca o nome */}
          <p>Localização: {location}</p> {/* coloca a localização */}
        </div>
        <div>
          {" "}
          {/* cria nova div para a bibiografia */}
          {/*Como o usuário pode não ter uma bibiografia em seu perfil faremos uma condicional */}
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          {/* Cria um botão para visitar o perfil do github */}
          <a href={html_url} className="btn btn-dark my-1">
            Visite o perfil no GitHub
          </a>
          <ul>
            <li>
              {/* Se o usuário existir ou seja != null, será apresentado o nome do usuário */}
              {login && (
                <Fragment>
                  <strong>Usuário: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {/* Se company existir ou seja != null, será apresentado o nome da companhia */}
              {company && (
                <Fragment>
                  <strong>Companhia: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {/* Se o usuário tiver o blog ou seja != null, será apresentado o nome do blog */}
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      {/*Div com as informações do usuário  */}
      <div className="card text-center">
        <div className="badge badge-primary">Seguindo: {followers}</div>
        <div className="badge badge-success">Seguidores: {following}</div>
        <div className="badge badge-light">
          {" "}
          Repositório Público: {public_repos}{" "}
        </div>
        <div className="badge badge-dark ">Gists Público: {public_gists}</div>
      </div>
      <Repos repos={repos} />{" "}
      {/* apresenta os repositorios, definifos em repos.js */}
    </Fragment>
  );
  //}
};

export default User;
