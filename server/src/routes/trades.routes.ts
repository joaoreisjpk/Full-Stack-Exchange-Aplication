import { Router } from 'express';
import listTradesController from '../modules/trades/useCases/listTrades';
import removeTradesController from '../modules/trades/useCases/removeTrade';
import wipeTradesController from '../modules/trades/useCases/wipeTrades';
import { sendNewTrade } from '../queues/trades.queue';

const router = Router();

router.get('/', async (req, res) => {
  return listTradesController().handle(req, res)
});

router.post('/', async (req, res) => {
  await sendNewTrade(req.body);
  return res.send({ message: 'yay' })
});

router.delete('/wipe', async (req, res) => {
  return wipeTradesController().handle(req, res)
})

router.delete('/:id', async (req, res) => {
  return removeTradesController().handle(req, res)
});

export default router;
