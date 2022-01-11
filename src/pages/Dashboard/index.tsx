import { useEffect, useState } from 'react';
import { Formik } from 'formik';

import {
  Typography,
  Box,
} from '@mui/material';

import { validateInputs } from '../../helpers';
import { useNavigate } from 'react-router-dom';

import { useTrades } from '../../hooks/useTrades';
import SelectForms from './SelectForms';
import InputForms from './InputForms';

interface InputsDataProps {
  baseMoney: number | '';
}

interface GraphicDataProps {
  baseCurrency: string;
  exchangeCurrency: string;
}

export default function Dashboard() {
  const { socket } = useTrades();

  const [currentIntraDayData, setCurrentIntraDayData] = useState({});
  const [currentExchange, setCurrentExchange] = useState<string>();
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
      setCurrentExchange(data[key]); //
    });

    socket.on('intraDayRates', (data) => {
      const key = `${baseCurrency}_${exchangeCurrency}_intraday`; // ex: GBP_USD_Currency, GBP_BRL_Currency:
      // console.log(Object.entries(data[key]['Time Series FX (60min)']))
      setCurrentIntraDayData(data[key]);
    });
  }, [socket, currency]);

  function submitHandler(inputsData: InputsDataProps, resetForm: () => void) {
    const { baseMoney } = inputsData;
    socket.emit('tradesUpdate');

    fetch('http://localhost:3333/trades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        baseMoney,
        currencyExchange: currentExchange,
        exchangeAmount: Number(baseMoney) * Number(currentExchange),
      }),
    });
    resetForm();
  }

  function submitOptionsHandler(inputsData: GraphicDataProps) {
    const { baseCurrency, exchangeCurrency } = inputsData;
    socket.emit('dashboardConnection');
    setCurrency({ baseCurrency, exchangeCurrency });
  }

  return (
    <Box>
      <Typography fontSize='1.8rem' align='center' marginTop={5}>
        Currency Exchange
      </Typography>
      <Typography fontSize='.8rem' align='center'>
        The current exchange from {currency.baseCurrency} to{' '}
        {currency.exchangeCurrency} is {Number(currentExchange).toFixed(3)}
      </Typography>
      <Formik
        initialValues={{
          baseCurrency: 'GBP',
          exchangeCurrency: 'USD',
        }}
        validate={({ baseCurrency, exchangeCurrency }: GraphicDataProps) => {
          if (baseCurrency === exchangeCurrency) {
            return { baseCurrency: 'error', exchangeCurrency: 'error' };
          }
          return {};
        }}
        onSubmit={async (inputsData: GraphicDataProps) =>
          submitOptionsHandler(inputsData)
        }
      >
        <SelectForms />
      </Formik>
      <Formik
        initialValues={{
          baseMoney: '',
        }}
        validate={({ baseMoney }: InputsDataProps) =>
          validateInputs({ baseMoney })
        }
        onSubmit={async (inputsData: InputsDataProps, { resetForm }) =>
          await submitHandler(inputsData, resetForm)
        }
      >
        <InputForms currency={currency} />
      </Formik>
    </Box>
  );
}
