import { useEffect, useState } from 'react';
import {
  Box,
} from '@mui/material';

import { useTrades } from '../../hooks/useTrades';
import SelectForms from './SelectForms';
import Header from './Header';
import InputForms from './InputForms';

interface GraphicDataProps {
  baseCurrency: string;
  exchangeCurrency: string;
}

export default function Dashboard() {
  const { socket } = useTrades();

  const [currentIntraDayData, setCurrentIntraDayData] = useState({});
  const [currentCurrency, setCurrentCurrency] = useState<string>();
  const [currency, setCurrency] = useState({
    baseCurrency: 'GBP',
    exchangeCurrency: 'USD',
  });

  useEffect(() => {
    socket.emit('dashboardConnection');
    socket.on('connect', () => {
      console.log(`Connected with ${socket.id}`);
    });
  }, [socket]);

  useEffect(() => {
    const { baseCurrency, exchangeCurrency } = currency;
    socket.on('currencyRates', (data) => {
      const key = `${baseCurrency}_${exchangeCurrency}_Currency`; // ex: GBP_USD_Currency, GBP_BRL_Currency:
      console.log(key, data);
      setCurrentCurrency(data[key]); //
    });

    socket.on('intraDayRates', (data) => {
      const key = `${baseCurrency}_${exchangeCurrency}_intraday`; // ex: GBP_USD_Currency, GBP_BRL_Currency:
      // console.log(Object.entries(data[key]['Time Series FX (60min)']))
      setCurrentIntraDayData(data[key]);
    });
  }, [socket, currency]);

  function submitOptionsHandler(inputsData: GraphicDataProps) {
    const { baseCurrency, exchangeCurrency } = inputsData;
    setCurrency({ baseCurrency, exchangeCurrency });
  }

  return (
    <Box>
      <Header currency={{...currency, currentCurrency}} />
        <SelectForms submitOptionsHandler={submitOptionsHandler}/>
        <InputForms currency={{...currency, currentCurrency}} />
    </Box>
  );
}
