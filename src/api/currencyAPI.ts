import axios from 'axios';

const key = 'UNPEHGNOR7XNN6LO';

const api = axios.create({
  baseURL: 'https://www.alphavantage.co/'
})

const calculateCurrencyExchange = async (baseCurrency: string, exchangeCurrency: string): Promise<string> => {
  const response = await api
    .get(`query?function=CURRENCY_EXCHANGE_RATE&from_currency=${baseCurrency}&to_currency=${exchangeCurrency}&apikey=${key}`);

  return response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
}

export { calculateCurrencyExchange }
