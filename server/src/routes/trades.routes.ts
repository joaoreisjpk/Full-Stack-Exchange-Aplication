import { Router } from 'express';
import { model } from 'mongoose';
import { TradeSchemaProps }
  from '../model/Trade'
import { TradeSchema } from '../model/Trade';
const router = Router();

export const Trade = model<TradeSchemaProps>('Trade', TradeSchema)

router.get('/', async (req, res) => {
  try {
    const posts = await Trade.find();
    res.status(201).json(posts);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const { baseCurrency, currentCurrencyValue, exchangeAmount, exchangeCurrency, moneyAmount } = req.body;
  let post = new Trade({
    baseCurrency,
    exchangeCurrency,
    moneyAmount,
    currentCurrencyValue,
    exchangeAmount
  });

  try {
    const savedPost = await post.save()
    res.json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err })
  };
});

router.delete('/:id', async (req, res) => {
  try {
    const updateDB = await Trade.deleteOne(
      { _id: req.params.id }
    )
    res.json(updateDB);
  } catch (err) {
    res.status(400).json({ message: err })
  }
});

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
