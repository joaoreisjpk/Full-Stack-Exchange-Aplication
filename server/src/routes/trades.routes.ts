import { Router } from 'express';
import createTradesController from '../modules/trades/useCases/createTrade';
import listTradesController from '../modules/trades/useCases/listTrades';
import removeTradesController from '../modules/trades/useCases/removeTrade';
import wipeTradesController from '../modules/trades/useCases/wipeTrades';

const router = Router();

router.get('/', async (req, res) => {
  return listTradesController().handle(req, res)
});

router.post('/', async (req, res) => {
  return createTradesController().handle(req, res)
});

router.delete('/wipe', async (req, res) => {
  return wipeTradesController().handle(req, res)
})

router.delete('/:id', async (req, res) => {
  return removeTradesController().handle(req, res)
});

export default router;
