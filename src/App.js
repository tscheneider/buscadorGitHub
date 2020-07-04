/**Component => Inclui todos os ciclos de vida do React */
/**Fragment normalmente é utilizado como uma <div>, porém ela garante que não haverá quebrar no layout  */
import React from "react"; /**React é o import padrão para o sistema funcionar */ // Fragment, //useState,
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar"; /*Importa o que está vindo do return da class NavBar */
import Home from "./components/pages/Home";
import User from "./components/users/User";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Alert from "./components/layout/Alert";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";

import "./App.css"; /**Para que seja possivel aplicar estilos em todas as páginas */

const App = () => {
  return (
    <GithubState>
      {" "}
      {/* Permite a chamada dos itens (funções do ) de GithubState */}
      <AlertState>
        {" "}
        {/* Permite a chamada dos itens de AlertState */}
        <Router>
          {/* Permite o roteamento entre o corpo da página */}
          <div className="App">
            {" "}
            {/* Div da página inicial */}
            <NavBar />{" "}
            {/*  Faz com que seja criado a barra navbar em cima em todas as páginas, chama Navbar.js */}
            <div className="container">
              {" "}
              {/* Agrupa todos o itens dentro da tag */}
              <Alert />
              {/*O Switch é utilizado para rotear entre os corpos de páginas, ou seja,
              é onde ele decide se o que está aparecendo na tela é o corpo principal,
              about, ou user */}
              <Switch>
                <Route exact path="/" component={Home} />{" "}
                {/* / = página inicial chama Home.js */}
                <Route exact path="/about" component={About} />{" "}
                {/* /about = página chama About.js */}
                <Route exact path="/user/:login" component={User} />{" "}
                {/* o user será algo como: http://localhost:3000/user/bradtraversy */}
                <Route component={NotFound} />{" "}
                {/*Se chamar algo diferente dos itens acima chama NotFound.js */}
              </Switch>
            </div>{" "}
            {/* Fecha div container */}
          </div>{" "}
          {/* Fecha a div app */}
        </Router>
      </AlertState>
    </GithubState>
  );
  // }
};

export default App;
