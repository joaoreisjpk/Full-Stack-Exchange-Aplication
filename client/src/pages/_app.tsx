import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { TradesProvider } from '../hooks/useTrades';
import { appWithTranslation } from 'next-i18next';

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

export default appWithTranslation(MyApp);
