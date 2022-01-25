import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';


interface HistoryProps {
  data: {
    baseCurrency: string;
    exchangeCurrency: string;
    moneyAmount: number;
    currentCurrencyValue: number;
    exchangeAmount: number;
    date: Date;
    id: string;
  };
  handleDeleteTrade: (id: string) => void;
}

export default function HistoryItem({ data, handleDeleteTrade }: HistoryProps) {
  const { t } = useTranslation('history');
  const {
    id,
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
      id={id}
      border='2px solid black'
      padding='2rem'
      gap='1rem'
      flexDirection='column'
      display='flex'
    >
      <Typography variant='h5' textAlign='center'>
        {baseCurrency} {t('to')} {exchangeCurrency}
      </Typography>
      <Typography variant='h5'>
      {t('exchangeRate')} {Number(currentCurrencyValue).toFixed(2)}
      </Typography>
      <Typography variant='h5'>
      {t('baseAmount')}{' '}
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: baseCurrency,
        }).format(moneyAmount)}
      </Typography>
      <Typography variant='h5'>
      {t('exchangeAmount')}{' '}
        {new Intl.NumberFormat('en-GB', {
          style: 'currency',
          currency: exchangeCurrency,
        }).format(exchangeAmount)}
      </Typography>
      <Stack direction='row' justifyContent='space-between'>
        <Button
          onClick={() => handleDeleteTrade(id)}
          size='small'
          variant='contained'
          sx={{
            backgroundColor: '#e66d6d',
            fontWeight: 400,
          }}
        >
          {t('deleteButton')}
        </Button>
        <Typography variant='h6' textAlign='end'>
          {new Intl.DateTimeFormat('en-GB', options).format(new Date(date))}
        </Typography>
      </Stack>
    </Box>
  );
}
