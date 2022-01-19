import { v4 as uuidv4 } from 'uuid';

class Trade {
  id?: string;
  gbpToUsd?: number;
  usdToGbp?: number;
  currencyExchange?: number;
  exchangeAmount?: number;
  date?: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Trade }
