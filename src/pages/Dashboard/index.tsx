import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

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
  const [currentCurrencyValue, setCurrentCurrencyValue] = useState<string>();
  const [currency, setCurrency] = useState({
    baseCurrency: 'GBP',
    exchangeCurrency: 'USD',
  });

  const { baseCurrency, exchangeCurrency } = currency;

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
    const currencyKey = `${baseCurrency}_${exchangeCurrency}_Currency`; // ex: GBP_USD_Currency
    const intradayKey = `${baseCurrency}_${exchangeCurrency}_intraday`; // ex: GBP_USD_intraday,
    setCurrentCurrencyValue(currentCurrencyData[currencyKey]);
    setCurrentIntraDay(currentIntraDayData[intradayKey]);
  }, [baseCurrency, currency, currentCurrencyData, currentIntraDayData, exchangeCurrency]);

  function submitHandler(inputsData: GraphicDataProps) {
    const { baseCurrency, exchangeCurrency } = inputsData;
    setCurrency({ baseCurrency, exchangeCurrency });
  }

  return (
    <Stack
      justifyItems='center'
      direction='column'
      justifyContent='center'
      alignItems='center'
      margin='auto'
      padding='0 2rem'
      maxWidth={1200}
      className='maindiv'
    >
      <Header currency={{ ...currency, currentCurrencyValue }} />
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-evenly'
        width='100%'
        marginTop={8}
      >
        <Box>
          <Typography variant='h5' textAlign='center'>
            Select your currency:
          </Typography>
          <SelectForms submitHandler={submitHandler} />
        </Box>
        <Box>
          <Typography variant='h5' textAlign='center'>
            Exchange your money:
          </Typography>
          <InputForms currency={{ ...currency, currentCurrencyValue }} />
        </Box>
      </Stack>
      <Box width='80%' mt='3rem' alignContent={'center'}>
        <Typography variant='h5' textAlign='center'>
          Exchange chart {baseCurrency} to {exchangeCurrency}
        </Typography>
        <Chart currentIntraDay={currentIntraDay} />
      </Box>
    </Stack>
  );
}
