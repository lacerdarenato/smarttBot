import React from "react";

/*
Componente para listar as siglas de todas as moeda 
com o intuito de facilitar a navegação do usuário e 
selecionar a sigla correta para acessar as cotações 
*/

const List = (props) => (
  <ul className="coin__key">
    Sigla da moeda:
    <li className="coin__value">Sigla capturada API</li>;
  </ul>
);

export default List;
