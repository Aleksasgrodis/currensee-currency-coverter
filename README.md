# Currensee - Currency Rate Converter

## About

Simple currency conversion tool built with React. Allows for conversion of up to 170 currency pairs, mostly centralized currencies but includes a few decentralized cryptocurrencies as well.
#### [Live Demo](https://currensee.vercel.app/)
<br/>

### Limitations

The free version of the API in use updates the currency rates once every hour and is therefore unfortunately not real-time. 

Besides the update frequency, there are API call limitations set in place as well. To prevent spamming and futile calls/refreshing I've implemented storing certain data locally which makes sure to only send out api calls once an hour has passed since the latest update. 

The API also only allows for one endpoint, latest rates and 'USD' as base. Because of this, extra work and calculations were necessary to convert between different pairs not involving the United States Dollar.

### Local Use

If one decides to try to run this locally, mind the fact that api calls are done through [Vercel's](https://vercel.com/) serverless function from the [Open Exchange Rates API](https://openexchangerates.org/) and requires an API key and therefore won't work optimally until the necessary setup (hosting/key) is done.