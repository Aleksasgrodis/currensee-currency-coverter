import fetch from 'node-fetch';

module.exports = (req, res) => {
  fetch(`https://openexchangerates.org/api/latest.json?app_id=${process.env.API_KEY}`)
  .then(response => response.json())
  .then(data => res.json(data))
  
}