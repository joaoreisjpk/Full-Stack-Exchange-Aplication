import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';

import { Button, Typography, Grid, Stack, Box } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import MUInput from '../components/MUInput';
import { calculateCurrencyExchange } from '../api/currencyAPI';
import { validateInputs } from '../helpers';
import { useNavigate } from 'react-router-dom';

interface InputsDataProps {
  gbpToUsd: number | '';
  usdToGbp: number | '';
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [gbpExchange, setGbpExchange] = useState<number>();
  const [usdExchange, setUsdExchange] = useState<number>();

  useEffect(() => {
    const api = async () => {
      setGbpExchange(await calculateCurrencyExchange('USD', 'GBP'));
      setUsdExchange(await calculateCurrencyExchange('GBP', 'USD'));
    };
    api();
  }, []);

  function submitHandler(inputsData: InputsDataProps, resetForm: () => void) {
    const { gbpToUsd, usdToGbp } = inputsData;
    const getStorage = localStorage.getItem('history') || '[]';
    let newStorage = [...JSON.parse(getStorage)];

    if (!!gbpToUsd) {
      newStorage.push({
        gbpToUsd,
        currencyExchange: usdExchange,
        exchangeAmount: Number(gbpToUsd) * usdExchange,
      });
    } else {
      newStorage.push({
        usdToGbp,
        currencyExchange: gbpExchange,
        exchangeAmount: Number(usdToGbp) * gbpExchange,
        date: new Date(),
      });
    }

    localStorage.setItem('history', JSON.stringify(newStorage));
    resetForm();
  }

  return (
    <Box>
      <Typography
        fontSize='1.8rem'
        align='center'
        marginTop={5}
        marginLeft={-5}
      >
        Currency Exchange
      </Typography>
      <Typography fontSize='.8rem' marginLeft={-5} align='center'>
        The currency exchange from USD to GBP is {gbpExchange}
      </Typography>
      <Typography fontSize='.8rem' marginLeft={-5} align='center'>
        The currency exchange from GBP to USD is {usdExchange}
      </Typography>
      <Formik
        initialValues={{
          usdToGbp: '',
          gbpToUsd: '',
        }}
        validate={({ gbpToUsd, usdToGbp }: InputsDataProps) =>
          validateInputs({ gbpToUsd, usdToGbp })
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
              <Typography variant='h6' component='label' htmlFor='usdToGbp'>
                Exchange USD to GBP
              </Typography>
              <MUInput name='usdToGbp' type='input' label='US$' />
            </Stack>
            <Stack spacing={2}>
              <Typography variant='h6' component='label' htmlFor='gbpToUsd'>
                Exchange GBP to USD
              </Typography>
              <MUInput type='input' name='gbpToUsd' label='GBP$' />{' '}
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
