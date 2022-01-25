import { api } from "./api";
import 'dotenv/config';

const key = 'UNPEHGNOR7XNN6LO';

const calculateCurrencyExchange = async (baseCurrency: string, exchangeCurrency: string, num: number): Promise<string> => {
  const response = await api
    .get(`query?function=CURRENCY_EXCHANGE_RATE&from_currency=${baseCurrency}&to_currency=${exchangeCurrency}&apikey=${key}`);
  try {
    return response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
  } catch (err: any) {
    console.log(err);
    return '';
  };
}

let USD_GBP_Currency: string;
let GBP_USD_Currency: string;
let GBP_BRL_Currency: string;
let USD_BRL_Currency: string;
let BRL_USD_Currency: string;
let BRL_GBP_Currency: string;

async function updateCurrency() {
  GBP_USD_Currency = await calculateCurrencyExchange('GBP', 'USD', 1);
  USD_GBP_Currency = await calculateCurrencyExchange('USD', 'GBP', 2);

  await setTimeout(async () => {
    GBP_BRL_Currency = await calculateCurrencyExchange('GBP', 'BRL', 3);
    USD_BRL_Currency = await calculateCurrencyExchange('USD', 'BRL', 4);
  }, 1000 * 60);

  await setTimeout(async () => {
    BRL_USD_Currency = await calculateCurrencyExchange('BRL', 'GBP', 3);
    BRL_GBP_Currency = await calculateCurrencyExchange('BRL', 'USD', 4);
  }, 1000 * 60 * 2);
}

updateCurrency()

setInterval(async () => {
  updateCurrency()
}, 1000 * 60 * 5); // 5 minutes

export {
  GBP_USD_Currency, USD_GBP_Currency, GBP_BRL_Currency, USD_BRL_Currency, BRL_USD_Currency, BRL_GBP_Currency
}
