import { Typography } from "@mui/material";

interface HistoryProps {
  gbpToUsd?: string;
  usdToGbp?: string;
  currencyExchange: string;
  exchangeAmount: string;
  date: string;
  id: string;
  handleDeleteTrade: (id: string) => void;
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
  id,
  handleDeleteTrade,
}: ItemProps) {
  return (
    <section id={id}>
      <Typography variant='h5'>
        The currency exchange was: {title}
      </Typography>
      <Typography variant='h5'>
        White a Rate of {Number(currencyExchange).toFixed(2)}
      </Typography>
      <Typography variant='h5'>
        On {date}
      </Typography>
      <Typography variant='h5'>
        With an amount of {Number(gbpToUsd || usdToGbp).toFixed(2)}
      </Typography>
      <Typography variant='h5'>
        Witch turned into {Number(exchangeAmount).toFixed(2)}
      </Typography>
      <button type="button" onClick={() => handleDeleteTrade(id)}>
        Delete from History
      </button>
    </section>
  );
}