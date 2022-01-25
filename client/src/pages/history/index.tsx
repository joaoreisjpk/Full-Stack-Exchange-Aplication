import { Button, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { LinearProgress } from '@mui/material';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';

import { useTrades } from '../../hooks/useTrades';
import Header from '../../components/Header';
import HistoryItem from './_historyItem';

interface HistoryProps {
  baseCurrency: string;
  exchangeCurrency: string;
  moneyAmount: number;
  currentCurrencyValue: number;
  exchangeAmount: number;
  date: Date;
  id: string;
}

export default function History({
  data,
}: {
  data: HistoryProps[];
}): JSX.Element {
  const { socket } = useTrades();
  const { t } = useTranslation('history');

  const [historyList, setHistoryList] = useState<HistoryProps[]>(data || []);
  const [loading, setLoading] = useState(false);

  function handleDeleteTrade(id: string): void {
    const newHistoryList: HistoryProps[] = historyList.filter(
      (item) => item.id !== id
    );
    fetch(`http://localhost:3333/trades/${id}`, {
      method: 'DELETE',
    });
    socket.emit('tradesUpdate');
    setHistoryList(newHistoryList);
  }

  function handleWipeData() {
    setHistoryList([]);
    fetch('http://localhost:3333/trades/wipe', {
      method: 'DELETE',
    });
    socket.emit('tradesUpdate');
  }

  useEffect((): void => {
    socket.on('newTrade', async () => {
      setLoading(true);
      const request = await fetch('http://localhost:3333/trades');
      const response: HistoryProps[] = await request.json();
      setHistoryList(response);
      setLoading(false);
    });
  }, [socket]);

  return (
    <Grid container direction='column'>
      <Header />
      <Stack gap={3} direction='column' margin='auto' padding={5}>
        <Typography fontSize='2.5rem'>{t('title')}</Typography>
        <Typography variant='h5'>
          {!historyList.length
            ? t('noTrades')
            : `${t('youHave')} ${historyList.length} ${t('trades')}`}
        </Typography>
        <Button
          onClick={handleWipeData}
          size='medium'
          variant='contained'
          sx={{
            backgroundColor: '#e66d6d',
            width: 265,
            fontWeight: 700,
          }}
        >
          {t('deleteAllButton')}
        </Button>

        {loading ? (
          <Box sx={{ width: '100%', marginTop: '4rem', color: '#e66d6d' }}>
            <LinearProgress color='inherit' />
          </Box>
        ) : (
          historyList.map((item: HistoryProps) => (
            <HistoryItem
              data={item}
              key={item.id}
              handleDeleteTrade={handleDeleteTrade}
            />
          ))
        )}
      </Stack>
    </Grid>
  );
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const local: any = locale;
  const request = await fetch('http://localhost:3333/trades');
  const response: HistoryProps[] = (await request.json()) || [];
  return {
    props: {
      data: response,
      ...(await serverSideTranslations(local, ['common', 'history'])),
    },
    redirect: 60 * 30,
  };
};
