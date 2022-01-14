import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface ICurrencyProps {
  currency: {
    baseCurrency: string;
    exchangeCurrency: string;
    currentCurrencyValue: string | undefined;
  };
}

export default function Header({ currency }: ICurrencyProps) {
  const { baseCurrency, exchangeCurrency, currentCurrencyValue } = currency;
  return (
    <>
      <Typography fontSize='2rem' align='center' marginTop={5}>
        Currency Exchange
      </Typography>
      <Typography fontSize='1.2rem' align='center'>
        The current exchange from {baseCurrency} to {exchangeCurrency} is{' '}
        {currentCurrencyValue ? (
          Number(currentCurrencyValue).toFixed(3)
        ) : (
          <CircularProgress
            color='secondary'
            size={24}
            sx={{
              position:'absolute',
              height: '20px',
              width:'20px',
              color: 'green',
              marginLeft:'1rem'
            }}
          />
        )}
      </Typography>
    </>
  );
}
