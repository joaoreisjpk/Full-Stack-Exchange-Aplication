import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { TradesProvider } from '../hooks/useTrades';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <TradesProvider>
        <>
          <CssBaseline />
          <Component {...pageProps} />
        </>
      </TradesProvider>
    </>
  );
}

export default MyApp;
