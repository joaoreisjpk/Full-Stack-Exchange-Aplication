import { Typography } from '@mui/material'

interface ICurrencyProps {
  currency: {
    baseCurrency: string;
    exchangeCurrency: string;
    currentCurrencyValue: string | undefined;
  };
}

export default function Header({currency }: ICurrencyProps) {
  const { baseCurrency, exchangeCurrency, currentCurrencyValue } = currency;
  return (
    <>
      <Typography fontSize='2rem' align='center' marginTop={5}>
        Currency Exchange
      </Typography>
      <Typography fontSize='1.2rem' align='center'>
        The current exchange from {baseCurrency} to{' '}
        {exchangeCurrency} is {Number(currentCurrencyValue).toFixed(3)}
      </Typography>
    </>
  )
}
