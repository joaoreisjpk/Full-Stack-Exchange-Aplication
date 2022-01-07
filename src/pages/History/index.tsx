import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HistoryItem from './HistoryItem';
import { io } from 'socket.io-client';

interface HistoryProps {
  gbpToUsd?: string;
  usdToGbp?: string;
  currencyExchange: string;
  exchangeAmount: string;
  date: string;
}

export default function History() {
  const [historyList, setHistoryList] = useState<HistoryProps[]>();

  const socket = io('http://localhost:4000/');

  const fetchTrades = async () => {
    const request = await fetch('http://localhost:3333/trades');
    const response = await request.json();
    setHistoryList(response);
  };

  socket.on('newTrade', async () => {
    fetchTrades();
  });

  useEffect(() => {
    fetchTrades();
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

        {!!historyList &&
          historyList.map((item: HistoryProps) => (
            <HistoryItem
              title={item.gbpToUsd ? 'GBP to USD' : 'USD to GBP'}
              key={item.date + String(item.exchangeAmount)}
              {...item}
            />
          ))}
      </Stack>
    </Grid>
  );
}
