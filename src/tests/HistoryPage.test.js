import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import socketIOClient from 'socket.io-client';
import MockedSocket from 'socket.io-mock';

import History from '../pages/History';
import { HistoryMock } from './mocks/HisitoryPageMock';
import { TradesProvider } from '../hooks/useTrades';

jest.mock('socket.io-client');

const mockFetch = async () => ({
  ok: true,
  json: async () => HistoryMock,
});

const getDeleteItemButton = async () =>
  await screen.findAllByRole('button', {
    name: /delete item/i,
  });

const getDeleteAllButton = async () =>
  await screen.findByRole('button', {
    name: /delete all history/i,
  });

describe('Testing the history Page', () => {
  /* Create server */
  let socket;

  beforeEach(() => {
    socket = new MockedSocket();
    socketIOClient.mockReturnValue(socket);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test('1 - Testing the History itens', async () => {
    // Setting the mock
    global.fetch = jest.fn(mockFetch);

    // Rendering the component
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <TradesProvider>
          <History />
        </TradesProvider>
      </BrowserRouter>
    );

    expect(global.fetch).toHaveBeenCalled();

    // Testing the fetched itens
    await screen.findByText(/resume/i);
    await screen.findByText(/You have 6 trades on your history/i);
    const USDtoBRL = await screen.findAllByText(/usd to brl/i);
    const GBPtoUSD = await screen.findAllByText(/gbp to usd/i);
    const GBPtoBRL = await screen.findAllByText(/gbp to brl/i);
    expect(USDtoBRL.length).toBe(4);
    expect(GBPtoUSD.length).toBe(1);
    expect(GBPtoBRL.length).toBe(1);

    await screen.findByText(/Base amount: US\$7,545.00/i);
    await screen.findByText(/12\/01\/2022, 23:46:28/i);
    await screen.findByText(/12\/01\/2022, 23:46:28/i);

    expect((await getDeleteItemButton()).length).toBe(6);
  });

  test('2 - Testing the DeleItem button', async () => {
    // Setting the mock
    global.fetch = jest.fn(mockFetch);

    // Rendering the component
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <TradesProvider>
          <History />
        </TradesProvider>
      </BrowserRouter>
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Excluding the first two itens
    userEvent.click((await getDeleteItemButton())[0]);
    userEvent.click((await getDeleteItemButton())[0]);

    // Testing if they continue on the application
    expect((await getDeleteItemButton()).length).toBe(4);
    const USDtoBRL = await screen.findAllByText(/usd to brl/i);
    const GBPtoUSD = screen.queryAllByText(/gbp to usd/i);
    const GBPtoBRL = screen.queryAllByText(/gbp to brl/i);
    expect(USDtoBRL.length).toBe(3);
    expect(GBPtoUSD.length).toBe(0);
    expect(GBPtoBRL.length).toBe(1);

    expect(global.fetch).toHaveBeenCalledTimes(3);
  });

  test('3 - Testing the DeleAllHistory button', async () => {
    // Setting the mock
    global.fetch = jest.fn(mockFetch);

    // Rendering the component
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <TradesProvider>
          <History />
        </TradesProvider>
      </BrowserRouter>
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Testing the default screen
    const USDtoBRL = await screen.findAllByText(/usd to brl/i);
    const GBPtoUSD = await screen.findAllByText(/gbp to usd/i);
    const GBPtoBRL = await screen.findAllByText(/gbp to brl/i);
    expect(USDtoBRL.length).toBe(4);
    expect(GBPtoUSD.length).toBe(1);
    expect(GBPtoBRL.length).toBe(1);

    // Excluding all items
    userEvent.click(await getDeleteAllButton());

    // Testing if they were excluded as expected
    const SyncUSDtoBRL = screen.queryAllByText(/usd to brl/i);
    const SyncGBPtoUSD = screen.queryAllByText(/gbp to usd/i);
    const SyncGBPtoBRL = screen.queryAllByText(/gbp to brl/i);

    act(() => {
      expect(SyncUSDtoBRL.length).toBe(0);
      expect(SyncGBPtoUSD.length).toBe(0);
      expect(SyncGBPtoBRL.length).toBe(0);
    });
    screen.getByText("You didn't made a trade yet");

    expect(global.fetch).toHaveBeenCalledTimes(7);
  });
});
