import React from "react";

const Coin = (props) => (
  <div>
    <div className="coin__info">
      {props.lastTrade && (
        <p className="coin__key">
          Preço mais recente:
          <span className="coin__value"> {props.lastTrade} </span>
        </p>
      )}
      {props.lowestAsk && (
        <p className="coin__key">
          Menor Compra:
          <span className="coin__value"> {props.lowestAsk} </span>
        </p>
      )}
      {props.highestBid && (
        <p className="coin__key">
          Maior Venda:
          <span className="coin__value"> {props.highestBid} </span>
        </p>
      )}
      {props.baseVolume && (
        <p className="coin__key">
          Volume Básico:
          <span className="coin__value"> {props.baseVolume} </span>
        </p>
      )}
      {props.percentChange && (
        <p className="coin__key">
          Percentual na troca:
          <span className="coin__value"> {props.percentChange} </span>
        </p>
      )}
      {props.error && <p className="coin__error">{props.error}</p>}
    </div>
  </div>
);

export default Coin;
