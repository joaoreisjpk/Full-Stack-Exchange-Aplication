import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
/* import { TradesProvider } from '../hooks/useTrades';
 */ import Dashboard from '../pages/Dashboard';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

const updateButton = async () =>
  await screen.findByRole('button', {
    name: /update/i,
  });
const sendButton = async () =>
  await screen.findByRole('button', {
    name: /update/i,
  });
const historyButton = async () =>
  await screen.findByRole('button', {
    name: /update/i,
  });
const listbox = () => within(screen.getByRole('listbox'));

const baseSelect = () =>
  screen.getByRole('button', {
    name: /base currency united kingdom \(gbp\)/i,
  });

const exchangeSelect = () =>
  screen.getByRole('button', {
    name: /exchange currency united states \(usd\)/i,
  });

const getTextBox = () =>
  screen.getByRole('spinbutton', {
    name: /usd \$/i,
  });

describe.skip('testing SelectForms from DashBoardPage', () => {
  test('1- Checking the default values on Dashboard', async () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        {/*         <TradesProvider>
         */}{' '}
        <Dashboard />
        {/*         </TradesProvider>
         */}{' '}
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
        <Dashboard />
      </BrowserRouter>
    );

    // updating the baseCurrency to BRL
    fireEvent.mouseDown(baseSelect());
    fireEvent.click(await listbox().findByText(/brazil \(brl\)/i));
    fireEvent.click(await updateButton());

    // testing if the suppoused changes happened
    const BRltoUSD = await screen.findAllByText(/BRL to USD/i);
    expect(BRltoUSD.length).toBe(3);
    await screen.findByText(/The current exchange from BRL to USD is/i);

    // updating the exchangeCurrency to GBP
    fireEvent.mouseDown(exchangeSelect());
    fireEvent.click(await listbox().findByText(/united kingdom \(gbp\)/i));
    fireEvent.click(await updateButton());

    // testing if the suppoused changes happened
    const BRltoGBP = await screen.findAllByText(/BRL to GBP/i);
    expect(BRltoGBP.length).toBe(3);
    await screen.findByText(/The current exchange from BRL to GBP is/i);
  });
  test('3- Checking if the validation works properly', async () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Dashboard />
      </BrowserRouter>
    );

    // updating the baseCurrency to BRL
    fireEvent.mouseDown(baseSelect());
    fireEvent.click(await listbox().findByText(/united states \(usd\)/i));
    fireEvent.click(await updateButton());

    // testing if the suppoused changes happened
    await screen.findAllByText(/equal values prohibided/i);
    const USDtoUSD = screen.queryAllByText(/USD to USD/i);
    expect(USDtoUSD.length).toBe(0);
  });
});

describe('testing InputForms from DashBoardPage', () => {
  test('1- Checking the default values', async () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Dashboard />
      </BrowserRouter>
    );

    // updating the baseCurrency to BRL
    getTextBox();
    await sendButton();
    await historyButton();
  });
  test('2- Checking the input validation', async () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Dashboard />
      </BrowserRouter>
    );

    // updating the input value
    userEvent.type(getTextBox(), 'jjj');
    // testing the validation
    await userEvent.click(await sendButton());
    await screen.findAllByText(/please fill one of inputs/i);

    // updating the input value
    userEvent.type(getTextBox(), '-123');
    // testing the validation
    userEvent.click(await updateButton());
    await screen.findByText(/Please, put a number bigger then 0/i)
  });
});
