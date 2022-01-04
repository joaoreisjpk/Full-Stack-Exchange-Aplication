import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HistoryItem from './HistoryItem';

interface HistoryProps {
  gbpToUsd?: string;
  usdToGbp?: string;
  currencyExchange: string;
  exchangeAmount: string;
  date: string;
}

export default function History() {
  const [historyList, setHistoryList] = useState<HistoryProps[]>();

  useEffect(() => {
    const getStorage = localStorage.getItem('history') || '[]';

    setHistoryList(JSON.parse(getStorage));
  }, []);

  if (!historyList) return <div>Carregando...</div>;

  return (
    <Grid container direction='column'>
      <Stack gap={3} direction='column' margin='auto' padding={5}>
        <Typography variant='h2'>Resume</Typography>
        <Typography variant='h5'>
          {!historyList?.length
            ? "You didn't made a trade yet"
            : `You have ${historyList.length} trades on your history`}
        </Typography>

        {!!historyList && historyList.map((item: HistoryProps, index: number) => (
          <HistoryItem
            title={item.gbpToUsd ? 'GBP to USD' : 'USD to GBP'}
            key={item.date}
            {...item}
          />
        ))}
      </Stack>
    </Grid>
  );
}
