import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HistoryItem from './HistoryItem';
import { useTrades } from '../../hooks/useTrades';

interface HistoryProps {
  gbpToUsd?: string;
  _id?: string;
  usdToGbp?: string;
  currencyExchange: string;
  exchangeAmount: string;
  date: string;
}

export default function History() {
  const [historyList, setHistoryList] = useState<HistoryProps[]>();
  const { socket } = useTrades();

  const fetchTrades = async () => {
    const request = await fetch('http://localhost:3333/trades');
    const response = await request.json();
    setHistoryList(response);
  };

  function handleDeleteTrade(id) {
    const newHistoryList = historyList.filter((item) => item._id !== id);
    fetch(`http://localhost:3333/trades/${id}`, {
        method: 'DELETE',
      });
    setHistoryList(newHistoryList);
  }

  function handleWipeData() {
    setHistoryList([]);
    for (const { _id } of historyList) {
      fetch(`http://localhost:3333/trades/${_id}`, {
        method: 'DELETE',
      });
    };
  }

  useEffect(() => {
    socket.on('newTrade', async () => {
      console.log(socket.id);
      fetchTrades();
    });
    fetchTrades();
  }, [socket]);

  if (!historyList) return <div>Carregando...</div>;

  return (
    <Grid container direction='column'>
      <Stack gap={3} direction='column' margin='auto' padding={5}>
        <Typography variant='h2'>Resume</Typography>
        <button onClick={handleWipeData} type="button">Wipe All Data</button>
        <Typography variant='h5'>
          {!historyList?.length
            ? "You didn't made a trade yet"
            : `You have ${historyList.length} trades on your history`}
        </Typography>

        {!!historyList &&
          historyList.map((item: HistoryProps) => (
            <HistoryItem
              title={item.gbpToUsd ? 'GBP to USD' : 'USD to GBP'}
              key={item.date}
              id={item._id}
              handleDeleteTrade={handleDeleteTrade}
              {...item}
            />
          ))}
      </Stack>
    </Grid>
  );
}
