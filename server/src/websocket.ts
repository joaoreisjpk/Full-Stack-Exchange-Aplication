import { io } from "./http";
import { GBP_BRL_Currency, GBP_USD_Currency, USD_BRL_Currency, USD_GBP_Currency, BRL_USD_Currency, BRL_GBP_Currency } from './api/exchangeAPI';
import { GBP_BRL_intraday, GBP_USD_intraday, USD_BRL_intraday, USD_GBP_intraday, BRL_USD_intraday, BRL_GBP_intraday, } from './api/intradayAPI';

io.on("connection", async (socket) => {
  console.log(socket.id);

  socket.on('dashboardConnection', () => {
    socket.emit('currencyRates', {
      USD_GBP_Currency,
      GBP_USD_Currency,
      GBP_BRL_Currency,
      USD_BRL_Currency,
      BRL_USD_Currency,
      BRL_GBP_Currency
    });
    setInterval(async () => {
      socket.emit('currencyRates', {
        USD_GBP_Currency,
        GBP_USD_Currency,
        GBP_BRL_Currency,
        USD_BRL_Currency,
        BRL_USD_Currency,
        BRL_GBP_Currency
      });
    }, 60 * 1000); // 1 minute

    socket.emit('intraDayRates', {
      USD_GBP_intraday,
      GBP_USD_intraday,
      USD_BRL_intraday,
      GBP_BRL_intraday,
      BRL_USD_intraday,
      BRL_GBP_intraday,
    });
    setInterval(async () => {
      socket.emit('intraDayRates', {
        USD_GBP_intraday,
        GBP_USD_intraday,
        USD_BRL_intraday,
        GBP_BRL_intraday,
        BRL_USD_intraday,
        BRL_GBP_intraday,
      });
    }, 60 * 1000); // 1 minute
  });

  socket.on('tradesUpdate', () => {
    socket.broadcast.emit('newTrade');
  });
});
