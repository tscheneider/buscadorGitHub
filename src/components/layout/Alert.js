import React, { useContext } from "react"; /**Padrão javascript */
import AlertContext from "../../context/alert/alertContext";

export const Alert = () => {
  /* declara a utilização do alertContext */
  const alertContext = useContext(AlertContext);
  /* Desestutura o alert  */
  const { alert } = alertContext;
  return (
    /* Se alert !== null será executado a div*/
    alert !== null && ( //alertContext.alert
      <div className={`alert alert=${alert.type}`}>
        {/*  icone de alerta */}
        <i className="fas fa-info-cicle"></i> {alert.msg}
      </div>
    )
  );
};
/* Permite que esse alert seja aplicado em Search.js */
export default Alert;
