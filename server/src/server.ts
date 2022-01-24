import express from 'express';
import cors from 'cors';
import './websocket';

import { serverHttp, app } from './http';

import './database';
import 'dotenv/config';
import { router } from './routes';

app.use(cors());
app.use(express.json());
app.use(router)

app.get('/', (req, res) => {
  res.status(201).send('We are on home');
});

serverHttp.listen(3333, () => console.log('server is running'));
