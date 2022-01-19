import socketIOClient from 'socket.io-client';
import MockedSocket from 'socket.io-mock';
import {
  intraDayData,
  currencyExchangeMockData,
} from './mocks/DashboardPageMock';

jest.mock('socket.io-client');

escribe('testing SelectForms from DashBoardPage', () => {
  let socket;

  beforeEach(() => {
    socket = new MockedSocket();
    socketIOClient.mockReturnValue(socket);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test('6 - Checking the socket.io funcionality', (done) => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <TradesProvider>
          <Dashboard />
        </TradesProvider>
      </BrowserRouter>
    );

    socket.socketClient.on('currencyRates', (data) => {
      console.log(data);
      done();
    });
    socket.emit('intraDayRates', intraDayData);
    socket.emit('currencyRates', currencyExchangeMockData);

    // await screen.findByText('1.37216');
  });
});
