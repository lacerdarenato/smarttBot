import React from "react";

/*
Componente para listar as siglas de todas as moeda 
com o intuito de facilitar a navegação do usuário e 
selecionar a sigla correta para acessar as cotações 
*/

const List = (props) => (
  <li className="coin__value"> {props.listCurrencies}</li>
);

export default List;
