import { Button, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import HistoryItem from './_historyItem';
import { useTrades } from '../../hooks/useTrades';
import { Box } from '@mui/system';
import { LinearProgress } from '@mui/material';
import Header from '../../components/Header';

interface HistoryProps {
  baseCurrency: string;
  exchangeCurrency: string;
  moneyAmount: number;
  currentCurrencyValue: number;
  exchangeAmount: number;
  date: Date;
  _id: string;
}

export default function History() {
  const [historyList, setHistoryList] = useState<HistoryProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { socket } = useTrades();

  const fetchTrades = async () => {
    const request = await fetch('http://localhost:3333/trades');
    const response = await request.json();
    setHistoryList(response);
    setLoading(false);
  };

  function handleDeleteTrade(id: string) {
    const newHistoryList = historyList.filter((item) => item._id !== id);
    fetch(`http://localhost:3333/trades/${id}`, {
      method: 'DELETE',
    });
    socket.emit('tradesUpdate');
    setHistoryList(newHistoryList);
  }

  function handleWipeData() {
    setHistoryList([]);
    for (const { _id } of historyList) {
      fetch(`http://localhost:3333/trades/${_id}`, {
        method: 'DELETE',
      });
    }
    socket.emit('tradesUpdate');
  }

  useEffect(() => {
    socket.on('newTrade', async () => {
      fetchTrades();
    });
    fetchTrades();
  }, [socket]);

  return (
    <Grid container direction='column'>
      <Header />
      <Stack gap={3} direction='column' margin='auto' padding={5}>
        <Typography variant='h2'>Resume</Typography>
        <Typography variant='h5'>
          {!historyList.length
            ? "You didn't made a trade yet"
            : `You have ${historyList.length} trades on your history`}
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
          Delete all history
        </Button>

        {loading ? (
          <Box sx={{ width: '100%', marginTop: '4rem', color: '#e66d6d' }}>
            <LinearProgress color='inherit' />
          </Box>
        ) : (
          historyList.map((item: HistoryProps) => (
            <HistoryItem
              data={item}
              key={item._id}
              handleDeleteTrade={handleDeleteTrade}
            />
          ))
        )}
      </Stack>
    </Grid>
  );
}