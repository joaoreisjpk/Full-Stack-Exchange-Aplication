import { ButtonGroup, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface HistoryProps {
  gbpToUsd?: string;
  usdToGbp?: string;
  currencyExchange: string;
  exchangeAmount: string;
  date: string;
}

interface ItemProps extends HistoryProps {
  title: string;
}

export default function History() {
  const [historyList, setHistoryList] = useState<HistoryProps[]>();

  useEffect(() => {
    const getStorage = localStorage.getItem('history') || '[]';

    setHistoryList(JSON.parse(getStorage));
  }, []);

  function HistoryItem({
    title,
    date,
    gbpToUsd,
    exchangeAmount,
    currencyExchange,
    usdToGbp,
  }: ItemProps) {
    return (
      <section>
        <Typography variant='h5'>
          The currency exchange was: {title}
        </Typography>
        <Typography variant='h5'>
          On {date}
        </Typography>
        <Typography variant='h5'>
          With an amount of {gbpToUsd || usdToGbp}
        </Typography>
        <Typography variant='h5'>
          The currency Rate was {currencyExchange}
        </Typography>
        <Typography variant='h5'>
          Witch turned into {exchangeAmount}
        </Typography>
      </section>
    );
  }

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
