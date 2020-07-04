import React, {
  useReducer,
} from "react"; /* Padrão do github mais o Hooks useReducer */
/* O useReducer Retorna um valor e uma função para atualizar o valor.*/
import axios from "axios"; /* O Axios é uma biblioteca de código aberto que nos permite fazer solicitações HTTP com facilidade. */
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

/* O Githubstate possui as principais funções da aplicação GitHub Finder 
e seus estados */
const GithubState = (props) => {
  /* estado global para qualquer coisa que tenha aver com o github */
  /* Inicialmente o estado retornado é o mesmo que o valor passado como argumento inicial  */
  const initialState = {
    /* Estado inicial */
    users: [], //array vazio
    user: {}, // objeto vazio
    repos: [], // array vazio
    loading: false, //boolean false
  };

  /* o trecho de código a seguir é utilizado para adicionar apágina na Web */
  /* colocando nossa aplicação no app netlify */
  let githubClientId;
  let githubClientSecret;
  if (process.env.NODE_ENV !== "production") {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  }

  /* Despacha para o redutor  */
  /* useReducer é geralmente preferível em relação ao useState 
  quando se tem uma lógica de estado complexa que envolve
   múltiplos sub-valores, ou quando o próximo estado depende do estado anterior */
  /* O redutor que estamos usando é o GithubReducer */
  /* state recebe Github Reducer (que verifica com caso está acontecendo no momento) e 
  dispatch = initial State */
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  /**Buscando os usuários do gitHub */
  /* O async avisa que nesta função irá ocorrer, uma busca assincrona */
  /* text é o texro que está vindo de Search.js */
  const searchUsers = async (text) => {
    /* Essa função é assincrona, porque se ela buscasse um usuário por vez demoraria muito */
    setLoading(
      true
    ); /* Muda o estado de carregamento de falso para verdadeiro */ /* O axios é um cliente HTTP leve, baseado em promessas e portanto podemos usar do método assíncrono. */ // chama a função de carregamento // chama a função de carregamento

    /* O axios é o que permite a realização das buscas */ /*  O axios deve ser instalado através do npm i axios*/ const res = await axios.get(
      //res recebe os itens da api de busca
      /* Parte desse link vem da API que está registrada em .env.local
      lá encontramos os dados de API:
      REACT_APP_GITHUB_CLIENT_ID='739d22fb1ce534641b6a'
      REACT_APP_GITHUB_CLIENT_SECRET='196a035f1579618d9422d7cc26822d2e3de7cf5f'*/
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    //atualixa o valor das variaveis e passa qual é o tipo para o reducer
    dispatch({
      /* Passa para o Reducer o tipo e o ação para reducer */
      type: SEARCH_USERS /*Esse tipo sera levado para o reducer */,
      payload:
        res.data
          .items /* Será enviado os dados buscados em res e será passado seus items */,
    });
  };

  //obter usuario
  const getUser = async (username) => {
    setLoading(); // chama a função de carregamento
    const res = await axios.get(
      //chama a api que busca os usuários no github
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    /* manda para o githubreducer o tipo e o dado buscado do usuário */
    dispatch({
      type: GET_USER /*Esse tipo sera levado para o reducer */,
      payload: res.data /* Será enviado os dados buscados em res*/,
    });
  };

  //obter repositório
  const getUserRepos = async (username) => {
    setLoading(); // chama a função de carregamento
    /* Axios chama a API do github */
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    /* manda para o githubreducer o tipo e o dado buscado do usuário */
    dispatch({
      type: GET_REPOS /*Esse tipo sera levado para o reducer */,
      payload: res.data /* Será enviado os dados buscados em res*/,
    });
  };

  //limpar usuarios
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //fazer carregamento
  const setLoading = () => dispatch({ type: SET_LOADING });

  //O provider é um provedor que irá dizer com que
  //seja adiquirido varios endereços que serão usados na Wharton
  //em um enndereço que queremos definir
  return (
    /* O Provider componente é o que torna o estado disponível 
    para todos os componentes filhos, não importa quão profundamente
    aninhados eles estejam dentro da hierarquia de componentes. */
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {/*  vamos agrupar todo o aplicativo neste provedor */}
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
