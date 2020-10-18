import React from 'react';
import currencies from '../currencies';

function ExchangeRates({ latestRates, baseCurrency, quoteCurrency }) {
  const baseToQuoteRate = () => {
    if (baseCurrency && latestRates && quoteCurrency) {
      if (baseCurrency === 'USD') {
        return latestRates[quoteCurrency].toFixed(6);
      } else if (quoteCurrency === 'USD') {
        return (1 / latestRates[baseCurrency]).toFixed(6);
      } else {
        return (
          (1 / latestRates[baseCurrency]) *
          latestRates[quoteCurrency]
        ).toFixed(6);
      }
    }
  };

  const quoteToBaseRate = () => {
    if (baseCurrency && latestRates && quoteCurrency) {
      if (quoteCurrency === 'USD') {
        return latestRates[baseCurrency].toFixed(6);
      } else if (baseCurrency === 'USD') {
        return (1 / latestRates[quoteCurrency]).toFixed(6);
      } else {
        return (
          (1 / latestRates[quoteCurrency]) *
          latestRates[baseCurrency]
        ).toFixed(6);
      }
    }
  };

  const fullCurrencyName = symbol => {
    const { currency } = currencies.find(
      currency => currency.symbol === symbol,
    );
    return currency;
  };
  fullCurrencyName('USD');
  return (
    <div className="exchange-rates">
      <div className="rate">
        <span className="title">{fullCurrencyName(baseCurrency)}</span>
        <span className="equals">
          1 {baseCurrency} = {baseToQuoteRate()} {quoteCurrency}
        </span>
      </div>
      <div className="rate">
        <div className="title">{fullCurrencyName(quoteCurrency)}</div>
        <div className="equals">
          1 {quoteCurrency} = {quoteToBaseRate()} {baseCurrency}
        </div>
      </div>
      {/* 1 {baseCurrency} = {baseToQuoteRate()}{' '}
      {quoteCurrency}, 1 {quoteCurrency} = {quoteToBaseRate()} {baseCurrency} */}
    </div>
  );
}

export default ExchangeRates;
