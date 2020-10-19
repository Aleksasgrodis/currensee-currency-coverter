import fetch from 'node-fetch';

module.exports = (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    fetch(
      `https://openexchangerates.org/api/latest.json?app_id=${process.env.API_KEY}`,
    )
      .then(response => response.json())
      .then(data => res.json(data));
  } else {
    res.json({
      "timestamp": 1603047613,
      "base": "USD",
      "rates": {
        "AED": 3.673,
        "AFN": 76.800005,
        "ALL": 105.7,
        "AMD": 481.616228,
        "ANG": 1.794672,
        "AOA": 646.6,
        "ARS": 77.49511,
        "AUD": 1.41223,
        "AWG": 1.8,
        "AZN": 1.7025,
        "BAM": 1.668676,
        "BBD": 2,
        "BDT": 84.779725,
        "BGN": 1.666973,
        "BHD": 0.377209,
        "BIF": 1936,
        "BMD": 1,
        "BND": 1.35791,
        "BOB": 6.913557,
        "BRL": 5.648385,
        "BSD": 1,
        "BTC": 0.000087300264,
        "BTN": 73.232861,
        "BWP": 11.49199,
        "BYN": 2.57268,
        "BZD": 2.015315,
        "CAD": 1.31875,
        "CDF": 1960,
        "CHF": 0.914828,
        "CLF": 0.028757,
        "CLP": 793.49981,
        "CNH": 6.6918,
        "CNY": 6.6976,
        "COP": 3851.218786,
        "CRC": 603.17038,
        "CUC": 0.999979,
        "CUP": 25.75,
        "CVE": 94.5,
        "CZK": 23.285,
        "DJF": 178,
        "DKK": 6.35165,
        "DOP": 58.45,
        "DZD": 129.166526,
        "EGP": 15.70636,
        "ERN": 15.000119,
        "ETB": 37.1,
        "EUR": 0.853607,
        "FJD": 2.141,
        "FKP": 0.774294,
        "GBP": 0.774294,
        "GEL": 3.23,
        "GGP": 0.774294,
        "GHS": 5.81,
        "GIP": 0.774294,
        "GMD": 51.7525,
        "GNF": 9790,
        "GTQ": 7.778437,
        "GYD": 209.227631,
        "HKD": 7.750415,
        "HNL": 24.500001,
        "HRK": 6.47,
        "HTG": 62.887735,
        "HUF": 311.03,
        "IDR": 14690.5675,
        "ILS": 3.37853,
        "IMP": 0.774294,
        "INR": 73.44451,
        "IQD": 1190,
        "IRR": 42105,
        "ISK": 139.3,
        "JEP": 0.774294,
        "JMD": 145.17182,
        "JOD": 0.709,
        "JPY": 105.4249596,
        "KES": 108.647034,
        "KGS": 81.248552,
        "KHR": 4105,
        "KMF": 420.200165,
        "KPW": 900,
        "KRW": 1142.210656,
        "KWD": 0.306014,
        "KYD": 0.833173,
        "KZT": 429.383932,
        "LAK": 9245,
        "LBP": 1513.307465,
        "LKR": 184.252837,
        "LRD": 195.449977,
        "LSL": 16.54,
        "LYD": 1.365,
        "MAD": 9.2075,
        "MDL": 16.914845,
        "MGA": 3925,
        "MKD": 52.628878,
        "MMK": 1295.667934,
        "MNT": 2848.528347,
        "MOP": 7.980496,
        "MRO": 357,
        "MRU": 36.935,
        "MUR": 39.863423,
        "MVR": 15.4,
        "MWK": 757,
        "MXN": 21.141101,
        "MYR": 4.1485,
        "MZN": 73.00001,
        "NAD": 16.54,
        "NGN": 381,
        "NIO": 34.73,
        "NOK": 9.380335,
        "NPR": 117.170514,
        "NZD": 1.513646,
        "OMR": 0.385139,
        "PAB": 1,
        "PEN": 3.585,
        "PGK": 3.5025,
        "PHP": 48.690585,
        "PKR": 162.75,
        "PLN": 3.882031,
        "PYG": 7027.99751,
        "QAR": 3.64125,
        "RON": 4.1614,
        "RSD": 100.35,
        "RUB": 77.8036,
        "RWF": 976,
        "SAR": 3.752881,
        "SBD": 8.08084,
        "SCR": 18.157917,
        "SDG": 55.275,
        "SEK": 8.86013,
        "SGD": 1.3584,
        "SHP": 0.774294,
        "SLL": 9967.50017,
        "SOS": 583,
        "SRD": 14.154,
        "SSP": 130.26,
        "STD": 21004.453008,
        "STN": 21,
        "SVC": 8.748107,
        "SYP": 512.867487,
        "SZL": 16.54,
        "THB": 31.20956,
        "TJS": 10.33253,
        "TMT": 3.5,
        "TND": 2.75375,
        "TOP": 2.31976,
        "TRY": 7.9344,
        "TTD": 6.786289,
        "TWD": 28.7805,
        "TZS": 2319.541,
        "UAH": 28.359718,
        "UGX": 3724.088312,
        "USD": 1,
        "UYU": 42.887396,
        "UZS": 10364,
        "VEF": 248487.642241,
        "VES": 450292,
        "VND": 23182.678431,
        "VUV": 113.820748,
        "WST": 2.643907,
        "XAF": 559.929257,
        "XAG": 0.04139934,
        "XAU": 0.00052652,
        "XCD": 2.70255,
        "XDR": 0.708424,
        "XOF": 559.929257,
        "XPD": 0.00042846,
        "XPF": 101.862369,
        "XPT": 0.00115659,
        "YER": 250.349961,
        "ZAR": 16.545705,
        "ZMW": 20.157923,
        "ZWL": 322
      }
    })
  }
};
