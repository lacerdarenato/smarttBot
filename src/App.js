import React, { Component } from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Coin from "./components/Coin";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      listCurrencies: [],
      lastTrade: undefined,
      lowestAsk: undefined,
      highestBid: undefined,
      baseVolume: undefined,
      percentChange: undefined,
      error: undefined,
    };
  }

  getList = async () => {
    const api_call_currencies = await fetch(
      `https://poloniex.com/public?command=returnCurrencies`
    );
    const listCurrencies = await api_call_currencies.json();
    const lista = Object.keys(listCurrencies);
    console.log(lista);

    this.setState({
      listCurrencies: lista,
    });
  };

  getCoin = async (e) => {
    e.preventDefault();
    const coin = e.target.elements.coin.value;
    const currency = e.target.elements.currency.value;
    const api_call_exchange = await fetch(
      `https://poloniex.com/public?command=returnTicker`
    );
    const dataCoin = await api_call_exchange.json();

    if (dataCoin.Response === "Error") {
      this.setState({
        //listCurrencies: [],
        lastTrade: undefined,
        lowestAsk: undefined,
        highestBid: undefined,
        baseVolume: undefined,
        percentChange: undefined,
        error: dataCoin["Message"],
      });
    } else if (coin && currency) {
      const key = coin + "_" + currency;
      this.setState({
        //listCurrencies: lista,
        lastTrade: dataCoin[key]["last"],
        lowestAsk: dataCoin[key]["lowestAsk"],
        highestBid: dataCoin[key]["highestBid"],
        baseVolume: dataCoin[key]["baseVolume"],
        percentChange: dataCoin[key]["percentChange"],
        error: "",
      });
    } else {
      this.setState({
        //listCurrencies: [],
        lastTrade: undefined,
        lowestAsk: undefined,
        highestBid: undefined,
        baseVolume: undefined,
        percentChange: undefined,
        error: "Please enter the values",
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getCoin={this.getCoin} getList={this.getList} />
                  <Coin
                    lastTrade={this.state.lastTrade}
                    lowestAsk={this.state.lowestAsk}
                    highestBid={this.state.highestBid}
                    baseVolume={this.state.baseVolume}
                    percentChange={this.state.percentChange}
                    error={this.state.error}
                  />
                  <ul className="coin__info">
                    <List listCurrencies={this.state.listCurrencies} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
