import { useEffect, useState } from 'react';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next'

import { useTrades } from '../../hooks/useTrades';
import SelectForms from './_selectForms';
import InputForms from './_inputForms';
import Chart from './_chart';
import Header from '../../components/Header';

interface GraphicDataProps {
  baseCurrency: string;
  exchangeCurrency: string;
}

export default function Dashboard(param: any): JSX.Element {
  const { socket } = useTrades();
  const { t } = useTranslation('common');

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
    console.log(param)
    socket.on('connect', () => {
      console.log(`Connected with ${socket.id}`);
    });
    socket.emit('dashboardConnection');
    socket.on('currencyRates', (data) => {
      setCurrentCurrencyData(data);
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
  }, [
    baseCurrency,
    currency,
    currentCurrencyData,
    currentIntraDayData,
    exchangeCurrency,
  ]);

  function submitHandler(inputsData: GraphicDataProps) {
    const { baseCurrency, exchangeCurrency } = inputsData;
    setCurrency({ baseCurrency, exchangeCurrency });
  }

  return (
    <>
      <Header />
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
        <Typography fontSize='1.2rem' marginTop='2rem' align='center'>
          {t('currentExchange')} {baseCurrency} {t('to')} {exchangeCurrency} {t('is')} {' '}
          {currentCurrencyValue ? (
            Number(currentCurrencyValue).toFixed(3)
          ) : (
            <CircularProgress
              color='secondary'
              size={24}
              sx={{
                position: 'absolute',
                height: '20px',
                width: '20px',
                color: 'green',
                marginLeft: '1rem',
              }}
            />
          )}
        </Typography>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-evenly'
          width='100%'
          marginTop={8}
        >
          <Box>
            <Typography variant='h5' textAlign='center'>
              {t('selectTitle')}:
            </Typography>
            <SelectForms submitHandler={submitHandler} />
          </Box>
          <Box>
            <Typography variant='h5' textAlign='center'>
              {t('inputTitle')}
            </Typography>
            <InputForms currency={{ ...currency, currentCurrencyValue }} />
          </Box>
        </Stack>
        <Box width='80%' mt='3rem' alignContent={'center'}>
          <Typography variant='h5' textAlign='center'>
            {t('chart')} {baseCurrency} {t('to')} {exchangeCurrency}
          </Typography>
          <Chart currentIntraDay={currentIntraDay} />
        </Box>
      </Stack>
    </>
  );
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const local: any = locale;
  return {
    props: {
      ...(await serverSideTranslations(local, ['common'])),
      // Will be passed to the page component as props
    },
  };
};
