import { Router } from 'express';
import { TradesRepository } from '../repositories/TradesRepository';

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
  const { gbpToUsd, usdToGbp, currencyExchange, exchangeAmount } = req.body;

  try {
    tradesRepository.create({ gbpToUsd, usdToGbp, currencyExchange, exchangeAmount })
  } catch (err) {
    res.status(400).json({ message: err })
  };

  return res.status(201).send();
});

/* router.delete('/:id', async (req, res) => {
  try {
    const updateDB = await Trade.deleteOne(
      { _id: req.params.id }
    )
    res.json(updateDB);
  } catch(err) {
    res.json({message: err})
  }
}); */

/* router.delete('/wipe/:list', async (req, res) => {
  const list = await JSON.parse(req.params.list);
    try {
    const updateDB = await Trade.deleteMany({
      _id: '61d87b3928ac6ef3d8f4338b'
    });
    res.json(updateDB);
  } catch(err) {
    res.json({message: err})
  }
}); */

export default router;
