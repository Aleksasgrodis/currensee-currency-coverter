import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ExchangeRates from './components/ExchangeRates';
import LastUpdatedAt from './components/LastUpdatedAt';
import currencies from './currencies';

function App() {
  const [latestRates, setLatestRates] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [baseCurrencyValue, setBaseCurrencyValue] = useState(1);
  const [quoteCurrency, setQuoteCurrency] = useState('EUR');
  const [quoteCurrencyValue, setQuoteCurrencyValue] = useState(null);

  useEffect(() => {
    fetch('/api/fetchLatest')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLatestRates(data.rates);
        console.log(data.timestamp);
        setTimestamp(data.timestamp);
      })
      .catch(err => console.log(err));
    return () => {};
  }, []);

  useEffect(() => {
    if (latestRates) {
      setQuoteCurrencyValue(1 * latestRates['EUR']);
    }
    return () => {};
  }, [latestRates]);

  const convertToBase = newConversionValue => {
    setQuoteCurrencyValue(newConversionValue);
    if (quoteCurrency === 'USD') {
      setBaseCurrencyValue(
        (newConversionValue * latestRates[baseCurrency]).toFixed(2),
      );
    } else {
      setBaseCurrencyValue(
        (
          (1 / latestRates[quoteCurrency]) *
          latestRates[baseCurrency] *
          newConversionValue
        ).toFixed(2),
      );
    }
  };

  useEffect(() => {
    const convertFromBase = () => {
      if ((baseCurrency, baseCurrencyValue, quoteCurrency, latestRates)) {
        if (baseCurrency === 'USD') {
          setQuoteCurrencyValue(
            (baseCurrencyValue * latestRates[quoteCurrency]).toFixed(2),
          );
        } else {
          setQuoteCurrencyValue(
            (
              (1 / latestRates[baseCurrency]) *
              latestRates[quoteCurrency] *
              baseCurrencyValue
            ).toFixed(2),
          );
        }
      }
    };
    convertFromBase();
    return () => {};
  }, [baseCurrency, baseCurrencyValue, quoteCurrency, latestRates]);

  const handleReverseCurrencies = e => {
    e.preventDefault();
    const fromValue = baseCurrencyValue;
    const toValue = quoteCurrencyValue;
    const fromCurrency = baseCurrency;
    const toCurrency = quoteCurrency;
    setBaseCurrency(toCurrency);
    setQuoteCurrency(fromCurrency);
    setBaseCurrencyValue(toValue);
    setQuoteCurrencyValue(fromValue);
  };

  return (
    <div className="app">
      <h1 className="app-name">&#8373;U&#8377;&#8377;€N$&#163;&#163;</h1>
      <ExchangeRates
        latestRates={latestRates}
        baseCurrency={baseCurrency}
        quoteCurrency={quoteCurrency}
      />
      <form action="">
        <div className="rows">
          <div className="row">
            <input
              type="number"
              step="1"
              value={baseCurrencyValue}
              onChange={e => setBaseCurrencyValue(e.target.value)}
            />
            <select
              value={baseCurrency}
              onChange={e => setBaseCurrency(e.target.value)}
            >
              {currencies.map(c => (
                <option key={c.currency} value={c.symbol}>
                  {c.symbol}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <input
              type="number"
              step="1"
              value={quoteCurrencyValue || 0}
              onChange={e => convertToBase(e.target.value)}
            />
            <select
              value={quoteCurrency}
              onChange={e => setQuoteCurrency(e.target.value)}
            >
              {currencies.map(c => (
                <option key={c.currency} value={c.symbol}>
                  {c.symbol}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="flip" onClick={e => handleReverseCurrencies(e)}>
          <FontAwesomeIcon icon={faSync} />
        </button>
      </form>
      <LastUpdatedAt timestamp={timestamp} />
    </div>
  );
}

export default App;
