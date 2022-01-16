import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TradesProvider } from './hooks/useTrades';
import { CssBaseline } from '@mui/material';
ReactDOM.render(
  <TradesProvider>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </TradesProvider>,
  document.getElementById('root')
);
