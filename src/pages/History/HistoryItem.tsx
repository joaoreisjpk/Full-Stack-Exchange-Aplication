import { Typography } from "@mui/material";

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