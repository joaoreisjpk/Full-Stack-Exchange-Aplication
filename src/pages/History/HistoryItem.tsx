import { Typography } from "@mui/material";

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

export default function HistoryItem({
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
        White a Rate of {currencyExchange}
      </Typography>
      <Typography variant='h5'>
        On {date}
      </Typography>
      <Typography variant='h5'>
        With an amount of {gbpToUsd || usdToGbp}
      </Typography>
      <Typography variant='h5'>
        Witch turned into {exchangeAmount}
      </Typography>
    </section>
  );
}