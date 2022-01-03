import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Login from './pages/Login';

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
