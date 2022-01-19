import { api } from "./api";
import 'dotenv/config';

const key= process.env.KEY2;

const handleRequest = (data: any, num: number): string[][] | void => {
  try {
    const array = Object.entries(data['Time Series FX (60min)']);
    const filter = array.filter((_, index) => (
      index % 12 === 0
    ));
    const map = filter.map((item: any) => (
      [item[0], item[1][`4. close`]]
    ));
    return map;
  } catch (err) {
    console.log('intraDay: ', num, err);
  };
};

const calculateIntradayCurrencyExchange = async (baseCurrency: string, exchangeCurrency: string, num: number): Promise<string[][] | void> => {
  try {
    const response = await api
      .get(`query?function=FX_INTRADAY&from_symbol=${baseCurrency}&to_symbol=${exchangeCurrency}&interval=60min&apikey=${key}`);
    return handleRequest(response.data, num);
  } catch (err: any) {
    console.log(err);
  }
}

let GBP_USD_intraday: string[][] | void;
let USD_GBP_intraday: string[][] | void;
let USD_BRL_intraday: string[][] | void;
let GBP_BRL_intraday: string[][] | void;
let BRL_USD_intraday: string[][] | void;
let BRL_GBP_intraday: string[][] | void;

async function updateIntraday() {
  USD_GBP_intraday = await calculateIntradayCurrencyExchange('USD', 'GBP', 1);
  GBP_USD_intraday = await calculateIntradayCurrencyExchange('GBP', 'USD', 2);

  await setTimeout(async () => {
    USD_BRL_intraday = await calculateIntradayCurrencyExchange('USD', 'BRL', 3);
    GBP_BRL_intraday = await calculateIntradayCurrencyExchange('GBP', 'BRL', 4);
  }, 1000 * 60);

  await setTimeout(async () => {
    BRL_USD_intraday = await calculateIntradayCurrencyExchange('BRL', 'USD', 3);
    BRL_GBP_intraday = await calculateIntradayCurrencyExchange('BRL', 'GBP', 4);
  }, 1000 * 60 * 2);
}

updateIntraday();

setInterval(async () => {
  updateIntraday();
}, 1000 * 60 * 60); // 1hora

export {
  GBP_USD_intraday, USD_GBP_intraday, USD_BRL_intraday, GBP_BRL_intraday, BRL_USD_intraday, BRL_GBP_intraday,
}
