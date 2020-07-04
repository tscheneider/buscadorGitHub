import React from "react"; /**Import Padrão do react */
import PropTypes from "prop-types"; /**Import para definir os tipos dos componentes */
import { Link } from "react-router-dom";

/**Função Item do usuário. Ao buscar o nome dos usuários,
 * na página principal será apresentado o nome, avatar e endereço
 * de cada usuário. Por esse motivo passamos como parametro um objeto
 * user com  login, avatar_url, html_url
 */
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    /**Essa div chama um estilo css para deixar a imagem centralizada */
    <div className="card text-center">
      <img
        src={avatar_url} /*Colocar de onde está vindo o avatar */
        alt=""
        className="round-img" /*Deixa a imagem no formato redondo */
        style={{ width: "60px" }} /*  tamanho da imagem */
      />
      <h3>{login}</h3> {/* Coloca o login do usuario na tela */}
      <div>
        {" "}
        {/*Cria o botão More. Ao clicar neste Botão ele direciona a página para user.js  */}
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

/* Define user do tipo objeto */
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

/*Torna possivel exportar as iformações para outras páginas, como a users */
export default UserItem;
