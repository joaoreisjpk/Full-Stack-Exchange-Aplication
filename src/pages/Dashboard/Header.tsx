import { Typography } from '@mui/material'

interface ICurrencyProps {
  currency: {
    baseCurrency: string;
    exchangeCurrency: string;
    currentCurrency: string | undefined;
  };
}

export default function Header({currency }: ICurrencyProps) {
  const { baseCurrency, exchangeCurrency, currentCurrency } = currency;
  return (
    <>
      <Typography fontSize='1.8rem' align='center' marginTop={5}>
        Currency Exchange
      </Typography>
      <Typography fontSize='.8rem' align='center'>
        The current exchange from {baseCurrency} to{' '}
        {exchangeCurrency} is {Number(currentCurrency).toFixed(3)}
      </Typography>
    </>
  )
}
