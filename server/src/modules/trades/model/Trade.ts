import { v4 as uuidv4 } from 'uuid';

class Trade {
  baseCurrency?: string;
  exchangeCurrency?: string;
  moneyAmount?: number;
  currentCurrencyValue?: number;
  exchangeAmount?: number;
  date?: Date;
  id?: string;

  constructor() {
    if(!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Trade }
