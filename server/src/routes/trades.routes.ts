import { Router } from 'express';
import { TradesRepository } from '../modules/trades/repositories/TradesRepository';
import { CreateTradesService } from '../services/CreateTradesService';

const router = Router();

const tradesRepository = new TradesRepository();

router.get('/', async (req, res) => {
  try {
    const list = tradesRepository.list();
    return res.json(list)
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const createTradesService = new CreateTradesService(tradesRepository)

  const newTrade = createTradesService.execute(req.body)

  res.json({newTrade});
});

router.delete('/:id', async (req, res) => {
  try {
    const newTradesArray = tradesRepository.remove(req.params.id)

    res.json(newTradesArray);
  } catch(err) {
    res.json({message: err})
  }
});

export default router;
