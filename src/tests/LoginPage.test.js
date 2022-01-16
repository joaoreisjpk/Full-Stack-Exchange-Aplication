import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Login from '../pages/Login';

const EMAIL = 'trybe@tryber.com';
const PASSWORD = '12345678';

const getEmail = () =>
  screen.getByRole('textbox', {
    name: /e-mail/i,
  });

const getPassword = () => screen.getByLabelText(/password/i);

const getButton = () =>
  screen.getByRole('button', {
    name: /login/i,
  });

describe('Testa se a tela de Login funciona devidamente', () => {
  test('1- Checking email validation', async () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Login />
      </BrowserRouter>
    );
    userEvent.type(getEmail(), 'jjj');
    userEvent.type(getPassword(), PASSWORD);
    userEvent.click(getButton());

    await screen.findByText(/The email format must be example@email.com/i);
  });

  test('2- Checking password validation', async () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Login />
      </BrowserRouter>
    );
    userEvent.type(getEmail(), EMAIL);
    userEvent.type(getPassword(), 'JJJ');
    userEvent.click(getButton());

    await screen.findByText(/The password must have at least 6 characters/i);
  });

  test('3- Checking whole validation', async () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Login />
      </BrowserRouter>
    );

    userEvent.type(getEmail(), EMAIL);
    userEvent.type(getPassword(), PASSWORD);
    userEvent.click(getButton());

    await waitFor(() => {
      const teste = screen.queryByText(/The password must have at least 6 characters/i)
      expect(teste).toBeNull()
    });
  });
});
