import React from "react";

/*
Componente para ranquear os preços de todas as trnasações de moedas
*/

const Ranking = (props) => (
  <li className="coin__value">
    {" "}
    {props.nome} - {props.last}
  </li>
);
// aaaaaaaa pq não vai?

export default Ranking;
