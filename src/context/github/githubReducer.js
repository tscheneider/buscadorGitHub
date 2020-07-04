import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types"; /* Hooks "simples" vindo de types */

/* é definida todas asações de usuário */
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS /* Caso buscar usuário */:
      return {
        ...state /* Cria uma cópia do estado atual */,
        users: action.payload /* Define o usuário, o usuário buscado */,
        loading: false /* Define como falso */,
      };
    case GET_USER /* Caso obter usuário */:
      return {
        ...state /* Cria uma cópia do estado atual */,
        user: action.payload /*Define o usuário, o usuário buscado */,
        loading: false /*Define como falso */,
      };
    case GET_REPOS /* caso obter repositorio */:
      return {
        ...state /* Cria uma cópia do estado atual */,
        repos: action.payload /*Define o usuário o usuário buscado */,
        loading: false /*Define como falso */,
      };
    case CLEAR_USERS /* Limpar usuário */:
      return {
        ...state /* Cria uma cópia do estado atual */,
        users: [] /* Define o usuário como vazio  */,
        loading: false /*Define como falso */,
      };
    case SET_LOADING /* Ativa carregamento */:
      return {
        ...state /* Cria uma cópia do estado atual */,
        loading: true /*Carregamento vai para verdairo então será apreentado em tela */,
      };
    default:
      /* Caso nenhum dos casos aconteça retorne o state */
      return state;
  }
};
