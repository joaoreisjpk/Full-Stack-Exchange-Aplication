import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { TradesProvider } from '../hooks/useTrades';
import Dashboard from '../pages/Dashboard';

describe('testing InputForms from DashBoardPage', () => {
   test('1- Checking the default values on Dashboard', async () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <TradesProvider>
          <Dashboard />
        </TradesProvider>
      </BrowserRouter>
    );

    await screen.findByText(/The current exchange from GBP to USD is/i);
    expect(screen.getAllByText(/GBP to USD/i).length).toBe(3);
    screen.getByText(/Loading/i);
  });
  test('2- Checking the default values change accordinaly', async () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <TradesProvider>
          <Dashboard />
        </TradesProvider>
      </BrowserRouter>
    );

    await screen.findByText(/The current exchange from GBP to USD is/i);
    expect(screen.getAllByText(/GBP to USD/i).length).toBe(3);
    screen.getByText(/Loading/i);
  });
});
