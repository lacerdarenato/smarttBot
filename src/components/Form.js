import React from "react";

const Form = (props) => (
  <div>
    <form onSubmit={props.getCoin}>
      <input type="text" name="coin" placeholder="ex. USDC" />
      <input type="text" name="currency" placeholder="ex. BTC" />
      <button>Buscar Cotação</button>
    </form>
    <button onClick={props.getList}>Lista Siglas</button>
  </div>
);

export default Form;
