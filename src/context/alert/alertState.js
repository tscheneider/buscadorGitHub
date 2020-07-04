import React, { useReducer } from "react";
//import axios from "axios";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  //Para um unico objeto podemos fazer
  const initialState = null;

  /* Despacha para o redutor  */
  /* O redutor que estamos usando é o Github Reducer */
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Adiciona o alerta
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(
      () => dispatch({ type: REMOVE_ALERT }),
      3000
      /* Faz com que o alerta fique disponivel por 3 segundos */
    );
  };

  //O provider é um provedor que irá dizer que apenas com que
  //seja adiquirido varios adereços que serão usados na Wharton
  //em um adereço que queremos definir
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {/*  vamos agrupar todo o aplicativo neste provedor */}
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
