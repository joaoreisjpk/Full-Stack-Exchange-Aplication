import {
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Dashboard from '../pages/Dashboard';
import userEvent from '@testing-library/user-event';
import { TradesProvider } from '../hooks/useTrades';
import { createServer, Server } from 'http';

describe('testing SelectForms from DashBoardPage', () => {
  /* Create server */
  const httpServer = createServer();
  const sampleMessage = 'Hello world!';
  const io = new Server(httpServer);
  
  beforeAll((done) => {
      httpServer.listen('3333', () => {
          console.log('listening on 3333');
          io.on('connection', (socket) => { 
              socket.emit('message', sampleMessage);
  
              socket.on('message', (message) => {
                console.log(message)
              });
          });
      });
      done()
  });

  
})
