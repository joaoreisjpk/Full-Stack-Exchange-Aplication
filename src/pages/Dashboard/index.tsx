import { useEffect, useState } from 'react';
import {
  Box,
} from '@mui/material';

import { useTrades } from '../../hooks/useTrades';
import SelectForms from './SelectForms';
import Header from './Header';
import InputForms from './InputForms';
import Chart from './Chart';

interface GraphicDataProps {
  baseCurrency: string;
  exchangeCurrency: string;
}

export default function Dashboard() {
  const { socket } = useTrades();

  const [currentIntraDayData, setCurrentIntraDayData] = useState({} as any);
  const [currentCurrencyData, setCurrentCurrencyData] = useState({} as any);
  const [currentIntraDay, setCurrentIntraDay] = useState([] as string[][]); 
  const [currentCurrency, setCurrentCurrency] = useState<string>();

  const [currency, setCurrency] = useState({
    baseCurrency: 'GBP',
    exchangeCurrency: 'USD',
  });

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`Connected with ${socket.id}`);
    });
    socket.emit('dashboardConnection');
    socket.on('currencyRates', (data) => {
      setCurrentCurrencyData(data); //
    });
    
    socket.on('intraDayRates', (data) => {
      setCurrentIntraDayData(data);
    });
  }, [socket]);
  
  useEffect(() => {
    const { baseCurrency, exchangeCurrency } = currency;
    const currencyKey = `${baseCurrency}_${exchangeCurrency}_Currency`; // ex: GBP_USD_Currency
    const intradayKey = `${baseCurrency}_${exchangeCurrency}_intraday`; // ex: GBP_USD_intraday,
    console.log('intraday: ',currentIntraDayData[currencyKey])
    console.log('currency: ', currentCurrencyData[currencyKey])
    setCurrentCurrency(currentCurrencyData[currencyKey]);
    setCurrentIntraDay(currentIntraDayData[intradayKey]);

  }, [currency, currentCurrencyData, currentIntraDayData]);

  function submitHandler(inputsData: GraphicDataProps) {
    const { baseCurrency, exchangeCurrency } = inputsData;
    setCurrency({ baseCurrency, exchangeCurrency });
  }

  return (
    <Box>
      <Header currency={{...currency, currentCurrency}} />
        <Chart currentIntraDay={currentIntraDay} />
        <SelectForms submitHandler={submitHandler}/>
        <InputForms currency={{...currency, currentCurrency}} />
    </Box>
  );
}
