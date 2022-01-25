import Bull from 'bull';
import tradeProcess from '../jobs/trades.process';
import { setQueues, BullAdapter } from 'bull-board';

const tradesQueue = new Bull('trades',
  {
    redis: { host: 'localhost', port: 6379, }
  });

setQueues([
  new BullAdapter(tradesQueue)
]);

tradesQueue.process(tradeProcess);

const sendNewTrade = (data: any) => {
  tradesQueue.add(data);
};

export {
  sendNewTrade
}