import React, { Component } from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Coin from "./components/Coin";
import List from "./components/List";
import Ranking from "./components/Ranking";

class App extends Component {
  constructor() {
    super();

    this.state = {
      ranking: [],
      listCurrencies: [],
      lastTrade: undefined,
      lowestAsk: undefined,
      highestBid: undefined,
      baseVolume: undefined,
      percentChange: undefined,
      error: undefined,
    };
  }
  getRank = async () => {
    const api_call_exchange = await fetch(
      `https://poloniex.com/public?command=returnTicker`
    );
    const dataRank = await api_call_exchange.json();
    const rankList = Object.entries(dataRank);
    let rankValues = [];
    rankList.map((item) =>
      rankValues.push({
        nome: item[0],
        id: item[1].id,
        last: item[1].last,
        lowestAsk: item[1].lowestAsk,
        highestBid: item[1].highestBid,
        percentChange: item[1].percentChange,
        baseVolume: item[1].baseVolume,
        quoteVolume: item[1].quoteVolume,
        isFrozen: item[1].isFrozen,
        high24hr: item[1].high24hr,
        low24hr: item[1].low24hr,
      })
    );
    console.log(rankValues);
    rankValues = rankValues.sort(function (a, b) {
      return a.last - b.last;
    });
    console.log(rankValues);

    this.setState({
      listCurrencies: [],
      ranking: rankValues,
    });
  };

  getList = async () => {
    const api_call_currencies = await fetch(
      `https://poloniex.com/public?command=returnCurrencies`
    );
    const listCurrencies = await api_call_currencies.json();
    const lista = Object.keys(listCurrencies);

    this.setState({
      listCurrencies: lista,
      ranking: [],
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
        lastTrade: dataCoin[key]["last"],
        lowestAsk: dataCoin[key]["lowestAsk"],
        highestBid: dataCoin[key]["highestBid"],
        baseVolume: dataCoin[key]["baseVolume"],
        percentChange: dataCoin[key]["percentChange"],
        error: "",
      });
    } else {
      this.setState({
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
    const {
      ranking,
      listCurrencies,
      lastTrade,
      lowestAsk,
      highestBid,
      baseVolume,
      percentChange,
      error,
    } = this.state;

    //const { nome, last, id } = ranking;

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
                  <Form
                    getCoin={this.getCoin}
                    getList={this.getList}
                    getRank={this.getRank}
                  />
                  <Coin
                    lastTrade={lastTrade}
                    lowestAsk={lowestAsk}
                    highestBid={highestBid}
                    baseVolume={baseVolume}
                    percentChange={percentChange}
                    error={error}
                  />

                  {listCurrencies.map((listCurrencies, index) => {
                    return (
                      <ul key={index} className="coin__info">
                        {<List listCurrencies={listCurrencies} />}
                      </ul>
                    );
                  })}
                  {ranking.map((ranking) => {
                    return (
                      <ul key={ranking["id"]} className="coin__info">
                        {
                          <Ranking
                            nome={ranking["nome"]}
                            last={ranking["last"]}
                          />
                        }
                      </ul>
                    );
                  })}
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
