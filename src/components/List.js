import React, { Component } from "react";

/*Componente para listar as siglas de todas as moeda com o intuito de facilitar a navegação do usuário e selecionar a sigla correta para acessar as cotações */

export default class List extends Component {
  getList = async () => {
    const api_call_currencies = await fetch(
      `https://poloniex.com/public?command=returnCurrencies`
    );
    const listCurrencies = await api_call_currencies.json();

    console.log(listCurrencies);
  };
  render() {
    return <li className="coin__value">Lista</li>;
  }
}
