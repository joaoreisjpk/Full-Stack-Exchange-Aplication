import { Trade } from "../model/Trade";
import { ITradesRepository } from "./ITradesRepository";

class TradesRepository implements ITradesRepository {
  private trades: Trade[];

  constructor() {
    this.trades = []
  }
  remove(id: string): Trade[] {
    const newTradesArray = this.trades.filter((item) => (
      item.id !== id
    ));
    this.trades = newTradesArray;
    return newTradesArray;
  }

  create({ baseCurrency, currentCurrencyValue, exchangeAmount, exchangeCurrency, moneyAmount }: Trade): Trade {
    const trade = {
      ...new Trade(),
      baseCurrency,
      currentCurrencyValue,
      exchangeAmount,
      exchangeCurrency,
      moneyAmount,
      date: new Date(),
    }

    this.trades.push(trade)
    return trade;
  }

  list(): Trade[] {
    return this.trades;
  }
}

export { TradesRepository };