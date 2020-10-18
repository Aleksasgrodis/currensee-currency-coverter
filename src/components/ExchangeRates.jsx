import React from 'react'

function ExchangeRates({latestRates, baseCurrency, quoteCurrency}) {
  const baseToQuoteRate = () => {
    if (baseCurrency && latestRates && quoteCurrency) {
      if (baseCurrency === 'USD') {
        return latestRates[quoteCurrency];
      } else if (quoteCurrency === 'USD') {
        return (1 / latestRates[quoteCurrency]).toFixed(6);
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
        return latestRates[baseCurrency];
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
  return (
    <div>
        exchange rates: 1 {baseCurrency} = {baseToQuoteRate()} {quoteCurrency}, 1{' '}
        {quoteCurrency} = {quoteToBaseRate()} {baseCurrency}
      </div>
  )
}

export default ExchangeRates
