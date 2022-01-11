import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';

import {
  Button,
  Typography,
  Grid,
  Stack,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import MUInput from '../components/MUInput';
import { validateInputs } from '../helpers';
import { useNavigate } from 'react-router-dom';

import { useTrades } from '../hooks/useTrades';
import MUISelect from '../components/MUISelect';

interface InputsDataProps {
  baseMoney: number | '';
}

interface GraphicDataProps {
  baseCurrency: string;
  exchangeCurrency: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { socket } = useTrades();

  const [gbpExchange, setGbpExchange] = useState<string>();
  const [currency, setCurrency] = useState({
    baseCurrency: 'GBP',
    exchangeCurrency: 'USD',
  });
  const [usdExchange, setUsdExchange] = useState<string>();

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`Connected with ${socket.id}`);
    });
    socket.on('updateCurrency', async ({ gbpCurrency, usdCurrency }) => {
      console.log('updatedCurrency');
      setGbpExchange(gbpCurrency);
      setUsdExchange(usdCurrency);
    });
  }, [socket]);

  useEffect(() => {
    socket.emit('dashboardConnection', currency);
  }, [socket, currency]);


  function submitHandler(inputsData: InputsDataProps, resetForm: () => void) {
    const { baseMoney } = inputsData;
    socket.emit('tradesUpdate');

    fetch('http://localhost:3333/trades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        baseMoney,
        currencyExchange: usdExchange,
        exchangeAmount: Number(baseMoney) * Number(usdExchange),
      }),
    });
    resetForm();
  }

  function submitOptionsHandler(inputsData: GraphicDataProps) {
    const { baseCurrency, exchangeCurrency } = inputsData;
    setCurrency({ baseCurrency, exchangeCurrency });
  }

  return (
    <Box>
      <Typography fontSize='1.8rem' align='center' marginTop={5}>
        Currency Exchange
      </Typography>
      <Typography fontSize='.8rem' align='center'>
        The current exchange from {currency.baseCurrency} to {currency.exchangeCurrency} is{' '}
        {Number(gbpExchange).toFixed(3)}
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
        <Form>
          <Grid
            container
            marginTop='2.5rem'
            gap={4}
            justifyItems='center'
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Stack spacing={2}>
              <FormControl fullWidth>
                <InputLabel>Base Currency</InputLabel>
                <MUISelect name='baseCurrency'>
                  <MenuItem value='GBP'>United Kingdom (GBP)</MenuItem>
                  <MenuItem value='USD'>United States (USD)</MenuItem>
                  <MenuItem value='JPY'>Japan (JPY)</MenuItem>
                  <MenuItem value='BRL'>Brasil (BRL)</MenuItem>
                  <MenuItem value='EUR'>Euro (EUR)</MenuItem>
                  <MenuItem value='CNY'>China (CNY)</MenuItem>
                  <MenuItem value='AUD'>Australia (AUD)</MenuItem>
                  <MenuItem value='CAD'>Canada (CAD)</MenuItem>
                  <MenuItem value='ARS'>Argentina (ARS)</MenuItem>
                </MUISelect>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Exchange Currency</InputLabel>
                <MUISelect name='exchangeCurrency'>
                  <MenuItem value='USD'>United States (USD)</MenuItem>
                  <MenuItem value='GBP'>United Kingdom (GBP)</MenuItem>
                  <MenuItem value='JPY'>Japan (JPY)</MenuItem>
                  <MenuItem value='BRL'>Brasil (BRL)</MenuItem>
                  <MenuItem value='EUR'>Euro (EUR)</MenuItem>
                  <MenuItem value='CNY'>China (CNY)</MenuItem>
                  <MenuItem value='AUD'>Australia (AUD)</MenuItem>
                  <MenuItem value='CAD'>Canada (CAD)</MenuItem>
                  <MenuItem value='ARS'>Argentina (ARS)</MenuItem>
                </MUISelect>
              </FormControl>
              <Button
                endIcon={<SendIcon />}
                type='submit'
                size='large'
                variant='contained'
                sx={{
                  width: 265,
                }}
              >
                Update
              </Button>
            </Stack>
          </Grid>
        </Form>
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
        <Form>
          <Grid
            container
            marginTop='2.5rem'
            gap={4}
            justifyItems='center'
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Stack spacing={2}>
              <Typography variant='h6' component='label' htmlFor='baseMoney'>
                Exchange {currency.baseCurrency} to {currency.exchangeCurrency}
              </Typography>
              <MUInput
                type='input'
                name='baseMoney'
                label={`${currency.exchangeCurrency} $`}
              />{' '}
              <Button
                endIcon={<SendIcon />}
                type='submit'
                size='large'
                variant='contained'
                sx={{
                  width: 265,
                }}
              >
                Enviar
              </Button>
              <Button
                endIcon={<SendIcon />}
                onClick={() => navigate('/history')}
                size='large'
                variant='contained'
                sx={{
                  width: 265,
                }}
              >
                History
              </Button>
            </Stack>
          </Grid>
        </Form>
      </Formik>
    </Box>
  );
}
