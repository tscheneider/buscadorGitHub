import React from "react"; /**Import Padrão */
import PropTypes from "prop-types"; /**Import para definir o tipo dos componentes */
import { Link } from "react-router-dom"; /*Faz o reteamento entre os corpos das páginas  */

/**Função Arrow que cria a barra navbar  */
/**O Navbar possui um icone e um texto por esse motivo os dois são passado como parametro */
const NavBar = ({ icon, title }) => {
  return (
    /**navbar bg-primary trata-se de um css que deixara o navbar da cor vermelha com letras brancas */
    <nav className="navbar bg-primary">
      <h1>
        {/* tag i Adiciona o icone e fora da tag 
         titulo no navBar */}
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          {" "}
          {/**cria link para inicio */}
          <Link to="/">Inicio</Link>
        </li>
        <li>
          {" "}
          {/*cria link para Sobre */}
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

/**Definimos aqui a navBar padrão, ou seja, estará em todas as páginas.
 * Por se tratar de uma função para definirmos o navbar padrão temos que chamar a função
 * NavBar.defalt.*/
NavBar.defaultProps = {
  title: "GitHub Finder" /**Titulo dado para a aplicação */,
  icon: "fab fa-github" /**icone que está vindo de index.html */,
};
/**Define os componentes de navBar titulo e icones como String.
   Importante lembrar: É utilizado Navbar.propType por que estamos definindo
 * tipos de componentes que estão dentro de uma função chamada NavBar*/
NavBar.propTypes = {
  title: PropTypes.string.isRequired /**Tipo String */,
  icon:
    PropTypes.string
      .isRequired /**O Tipo String, pois a função que chama o icone fab fa-github é uma string */,
};
export default NavBar;
