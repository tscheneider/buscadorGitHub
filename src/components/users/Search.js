import React, {
  useState,
  useContext, //importa o gancho dos estado  aqui
} from "react"; /**Padrão do React, Component é usado quando utilizamos class */
//import PropTypes from "prop-types"; /**Utilizado para definir os tipos de cada componente */
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

/* Como transformamos Search de uma class para uma função 
não precisaremos mais do render, tão teremos que passar props 
como parametro da função, ou no lugar se props podemos adiconar
como parametro  { adereços } . Sendo assim podemos apagar a desestruturação
realizada dentro de const*/
/**Classe responsável por pegar o item que foi escrito na
 * barra de pesquisa */
/**Por causa do context podemos apagar esses parametros */
const Search = (/*{ searchUsers, showClear, clearUsers,  setAlert }*/) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  /* Como importamos o useState podemos apagar
   esse trecho de código também. E wm seu lugar criamos um conjunto de variaveis*/
  /** O estado inicial */
  /*   state = {
    text: "" //*O textoo inicialmente é vazio ,
  }; */ const [
    text /* texto digitado no buscador */,
    setText,
  ] =
    /* método para alterar o estado */
    useState(
      ""
    ); /* Nos lugares que temos this.setState vamos 
   substituir por setText por causa dessa variavel*/

  /* Para termos uma função dentro de outra precisamos definir o tipo da função */
  const onSubmit = (e) => {
    e.preventDefault(); /**impede a ação padrão associada ao evento. 
    Neste caso levar o usuário ao caminho especificado no atributo do href  */

    /**Verifica se há algo escrito na barra de busca  */
    if (text === "") {
      // apagamos o this. state pois utilizando
      //o gancho useState não usaremos mais
      /* Se a barra de busca estiver vazia, chama um alerta */
      /*this.props.*/

      alertContext.setAlert(
        /* Não precisamos mais do this.props pq já chamamos esse gancho na função  */
        "Por favor digite um nome de usuário",
        "light"
      ); /* cahama a função setAlert de alert.js, passando a mensagem de erro e o estiloo css */
    } else {
      /* Se tiver algo escrito  */
      /* this.props.*/

      githubContext.searchUsers(
        text
      ); /** Chama a função searchUser de app.js passando o texto digitado*/
      // this.setState({ text: "", //foi substituido pela linha de baixo
      //}); /**Define o estado atual da barra de texto como vazio novamente */
      setText("");
    }
  };
  /**Essa função após a ação  de escrever algo no campo de
   * pesquisa, define o estado que estava vazio em nome e
   * valor digitado
   */
  const onChange = (e) => {
    setText(
      //{/* [e.target.name]: */ //Apagamos pq substituimos o seStat por setText
      e.target.value /*}*/
    );
  };
  /**Renponsavel por renderizar os itens na tela */
  //render() { /* Apagamos o render pq agora estamos usando uma função */
  /**Realiza a desestruturação onde tinhamos this.props.showClear
   * agora podemos digitar só showClear ou clearUsers
   */
  // const { showClear, clearUsers } = this.props; /* Esse item foi excluido por agora ser passado como parametro da função */
  return (
    /* Essa div cria um container com todos os itens dentro dela */
    <div>
      {/**Cria a barra onde será digitado a busca, já definindo
       * o que há na barra de busca e ao clicar no botão define
       * que chamará a função onSubmit
       */}
      <form onSubmit={onSubmit} className="form">
        <input
          type="text" /**a barra será do tipo texto */
          name="text" /**o nome de referência será text */
          placeholder="Pesquise pelo usuário..." /* Dentro dela estará escrito */
          /*Pega o valor que está em text dentro de state */
          value={/*this.state.*/ text} // apagamos  o this state por causa do useState('')
          /*Pega o estado atual da barra com caracteres ou não e passa para a funão onChange */
          onChange={onChange}
        />
        <input /**Cria o botão */
          type="submit" /*Tipo do botão */
          value="Search" /**Valor do botão */
          className="btn btn-dark btn-block" /**Estilo do botão */
        />
      </form>
      {/**
       * Neste caso o showClear esta fazendo uma condicional
       * em app.js verificando se há caracteres digitados ou não.
       * Isso significa que se showClear = true
       * aparecerá o botão Clear
       */}
      {githubContext.users.length > 0 /*showClear */ && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
  //}
};

/**Permite que os valores sejam exportados */
export default Search;
