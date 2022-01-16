import socketIOClient from 'socket.io-client';
import MockedSocket from 'socket.io-mock';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { TradesProvider } from '../../hooks/useTrades';
import Dashboard from '../../pages/Dashboard';

jest.mock('socket.io-client');

describe('Testing connection', () => {
  let socket;

  beforeEach(() => {
    socket = new MockedSocket();
    socketIOClient.mockReturnValue(socket);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should dispatch connect event', () => {
    /*socket should connect in App and 
    Note that the url should be dummy string 
    for test environment e.g.(const socket = io('', options);)*/
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <TradesProvider>
          <Dashboard />
        </TradesProvider>
      </BrowserRouter>
    );

    expect(socketIOClient.connect).toHaveBeenCalled();
  });

  test('should emit message:new', done  => {
    const history = createMemoryHistory();

    render(
      <BrowserRouter history={history}>
        <TradesProvider>
          <Dashboard />
        </TradesProvider>
      </BrowserRouter>
    );
    socket.on('message:new', (data)=>{
        expect(data).toEqual(['message1', 'message2']);
        console.log(data)
        done();
    });

    socket.socketClient.emit('message:new', ['message1', 'message2']);
  });
});