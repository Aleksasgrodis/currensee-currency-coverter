import React, { useEffect, useState } from 'react';
import './App.css';
import currencies from './currencies';
const rates = {
  AED: 3.67295,
  AFN: 76.899997,
  ALL: 105.4,
  AMD: 481.616228,
  ANG: 1.794956,
  AOA: 644.13,
  ARS: 77.4065,
  AUD: 1.39601,
  AWG: 1.8,
  AZN: 1.7025,
  BAM: 1.665039,
  BBD: 2,
  BDT: 84.803172,
  BGN: 1.663942,
  BHD: 0.377037,
  BIF: 1933.5,
  BMD: 1,
  BND: 1.357894,
  BOB: 6.909767,
  BRL: 5.602527,
  BSD: 1,
  BTC: 0.000088076398,
  BTN: 73.31842,
  BWP: 11.486227,
  BYN: 2.57692,
  BZD: 2.015586,
  CAD: 1.314348,
  CDF: 1662,
  CHF: 0.912778,
  CLF: 0.028949,
  CLP: 798.8,
  CNH: 6.712681,
  CNY: 6.7151,
  COP: 3855.964851,
  CRC: 603.346669,
  CUC: 0.999612,
  CUP: 25.75,
  CVE: 94.15,
  CZK: 23.2187,
  DJF: 178.021355,
  DKK: 6.33344,
  DOP: 58.445,
  DZD: 128.824024,
  EGP: 15.6999,
  ERN: 15.000103,
  ETB: 37,
  EUR: 0.850959,
  FJD: 2.13,
  FKP: 0.767477,
  GBP: 0.767477,
  GEL: 3.23,
  GGP: 0.767477,
  GHS: 5.81,
  GIP: 0.767477,
  GMD: 51.75,
  GNF: 9782.5,
  GTQ: 7.779676,
  GYD: 209.160138,
  HKD: 7.75005,
  HNL: 24.605,
  HRK: 6.4488,
  HTG: 63.147715,
  HUF: 309.185469,
  IDR: 14738.4,
  ILS: 3.37464,
  IMP: 0.767477,
  INR: 73.298889,
  IQD: 1190,
  IRR: 42105,
  ISK: 139.04,
  JEP: 0.767477,
  JMD: 144.884137,
  JOD: 0.709,
  JPY: 105.105,
  KES: 108.50205,
  KGS: 79.41565,
  KHR: 4105,
  KMF: 418.949775,
  KPW: 900,
  KRW: 1147.156305,
  KWD: 0.30583,
  KYD: 0.833436,
  KZT: 429.12603,
  LAK: 9245,
  LBP: 1519,
  LKR: 184.742892,
  LRD: 196.400009,
  LSL: 16.53,
  LYD: 1.37,
  MAD: 9.2025,
  MDL: 16.836534,
  MGA: 3920,
  MKD: 52.453698,
  MMK: 1304.970989,
  MNT: 2852.775017,
  MOP: 7.982377,
  MRO: 357,
  MRU: 36.98,
  MUR: 39.7,
  MVR: 15.41,
  MWK: 757,
  MXN: 21.317433,
  MYR: 4.1505,
  MZN: 72.29999,
  NAD: 16.47,
  NGN: 381,
  NIO: 34.7,
  NOK: 9.231573,
  NPR: 117.307431,
  NZD: 1.502088,
  OMR: 0.384995,
  PAB: 1,
  PEN: 3.5868,
  PGK: 3.5025,
  PHP: 48.620089,
  PKR: 163.75,
  PLN: 3.841797,
  PYG: 7005.247565,
  QAR: 3.641,
  RON: 4.1488,
  RSD: 99.99,
  RUB: 77.6377,
  RWF: 976,
  SAR: 3.751132,
  SBD: 8.149378,
  SCR: 18.110189,
  SDG: 55.275,
  SEK: 8.825111,
  SGD: 1.356935,
  SHP: 0.767477,
  SLL: 9849.999751,
  SOS: 583.5,
  SRD: 14.154,
  SSP: 130.26,
  STD: 21030.953008,
  STN: 21,
  SVC: 8.751081,
  SYP: 512.895518,
  SZL: 16.47,
  THB: 31.15,
  TJS: 10.33461,
  TMT: 3.5,
  TND: 2.75725,
  TOP: 2.312792,
  TRY: 7.912203,
  TTD: 6.785859,
  TWD: 28.759,
  TZS: 2319.892099,
  UAH: 28.338878,
  UGX: 3709.919082,
  USD: 1,
  UYU: 42.658887,
  UZS: 10359,
  VEF: 248487.642241,
  VES: 452325,
  VND: 23139.753835,
  VUV: 113.270619,
  WST: 2.640587,
  XAF: 558.192779,
  XAG: 0.04127971,
  XAU: 0.00052587,
  XCD: 2.70255,
  XDR: 0.707591,
  XOF: 558.192779,
  XPD: 0.00042464,
  XPF: 101.546469,
  XPT: 0.00116212,
  YER: 250.349961,
  ZAR: 16.539702,
  ZMW: 20.117261,
  ZWL: 322,
};

function App() {
  const [latestRates, setLatestRates] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [baseCurrencyValue, setBaseCurrencyValue] = useState(1);
  const [conversionCurrency, setConversionCurrency] = useState('EUR');
  const [conversionCurrencyValue, setConversionCurrencyValue] = useState(null);
  
  const convert = e => {
    e.preventDefault();
    fetch('/api/fetchLatest', {
      method: 'POST',
      body: JSON.stringify({
        title: 'hello',
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  useEffect(() => {
    setLatestRates(rates);
    return () => {};
  }, []);

  useEffect(() => {
    if (latestRates) {
      setConversionCurrencyValue(1 * latestRates['EUR']);
    }
    return () => {};
  }, [latestRates]);

  const convertFromBase = e => {
    setBaseCurrencyValue(e.target.value);
    if (baseCurrency === 'USD') {
      setConversionCurrencyValue(
        e.target.value * latestRates[conversionCurrency],
      );
    } else {
      setConversionCurrencyValue(
        (1 / latestRates[baseCurrency]) *
          latestRates[conversionCurrency] *
          e.target.value,
      );
    }
  };
  const convertToBase = e => {
    setConversionCurrencyValue(e.target.value);
    if (conversionCurrency === 'USD') {
      setBaseCurrencyValue(e.target.value * latestRates[baseCurrency]);
    } else {
      setBaseCurrencyValue(
        (1 / latestRates[conversionCurrency]) *
          latestRates[baseCurrency] *
          e.target.value,
      );
    }
  };

  return (
    <div>
      <form action="" onSubmit={e => convert(e)}>
        <input
          type="number"
          placeholder="Amount"
          value={baseCurrencyValue}
          onChange={e => convertFromBase(e)}
        />
        <select
          name=""
          id=""
          defaultValue="USD"
          onChange={e => setBaseCurrency(e.target.value)}
        >
          {currencies.map(c => (
            <option key={c.currency} value={c.symbol}>
              {c.symbol}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={conversionCurrencyValue}
          onChange={e => convertToBase(e)}
        />
        <select
          name=""
          id=""
          defaultValue="EUR"
          onChange={e => setConversionCurrency(e.target.value)}
        >
          {currencies.map(c => (
            <option key={c.currency} value={c.symbol}>
              {c.symbol}
            </option>
          ))}
        </select>
        <button type="submit">Convert</button>
      </form>
    </div>
  );
}

export default App;
