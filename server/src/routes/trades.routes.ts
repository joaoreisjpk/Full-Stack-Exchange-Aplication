import { Router } from 'express';
import { TradesRepository } from '../modules/trades/repositories/TradesRepository';
import { createTradesController } from '../modules/trades/useCases/createTrade';
import { listTradesController } from '../modules/trades/useCases/listTrades';
import { ListTradesController } from '../modules/trades/useCases/listTrades/ListTradesController';
import { removeTradesController } from '../modules/trades/useCases/removeTrade';

const router = Router();

router.get('/', async (req, res) => {
  return listTradesController.handle(req, res)
});

router.post('/', async (req, res) => {
  return createTradesController.handle(req, res)
});

router.delete('/:id', async (req, res) => {
  return removeTradesController.handle(req, res)
});

export default router;
