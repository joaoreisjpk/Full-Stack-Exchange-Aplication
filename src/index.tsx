import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TradesProvider } from './hooks/useTrades';
ReactDOM.render(
  <TradesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TradesProvider>,
  document.getElementById('root')
);
