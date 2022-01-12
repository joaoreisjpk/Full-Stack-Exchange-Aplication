import { Box, Button, Stack, Typography } from '@mui/material';

interface HistoryProps {
  data: {
    baseCurrency: string;
    exchangeCurrency: string;
    moneyAmount: number;
    currentCurrencyValue: number;
    exchangeAmount: number;
    date: Date;
    _id: string;
  };
  handleDeleteTrade: (id: string) => void;
}

export default function HistoryItem({ data, handleDeleteTrade }: HistoryProps) {
  const {
    _id,
    baseCurrency,
    currentCurrencyValue,
    date,
    exchangeAmount,
    exchangeCurrency,
    moneyAmount,
  } = data;

  const options: any = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'GMT',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return (
    <Box
      id={_id}
      border='2px solid black'
      padding='2rem'
      gap='1rem'
      flexDirection='column'
      display='flex'
    >
      <Typography variant='h5' textAlign='center'>
        {baseCurrency} to {exchangeCurrency}
      </Typography>
      <Typography variant='h5'>
        Exchange Rate: {Number(currentCurrencyValue).toFixed(2)}
      </Typography>
      <Typography variant='h5'>
        Base amount:{' '}
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: baseCurrency,
        }).format(moneyAmount)}
      </Typography>
      <Typography variant='h5'>
        Exchanged Amount{' '}
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: exchangeCurrency,
        }).format(exchangeAmount)}
      </Typography>
      <Stack direction='row' justifyContent='space-between'>
        <Button
          onClick={() => handleDeleteTrade(_id)}
          size='small'
          variant='contained'
          sx={{
            backgroundColor: '#e66d6d',
            fontWeight: 400,
          }}
        >
          Delete item
        </Button>
        <Typography variant='h6' textAlign='end'>
          {new Intl.DateTimeFormat('en-GB', options).format(new Date(date))}
        </Typography>
      </Stack>
    </Box>
  );
}
