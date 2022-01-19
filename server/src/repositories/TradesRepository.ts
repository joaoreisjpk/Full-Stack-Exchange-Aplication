import { Trade } from "../model/Trade";
import { ITradesRepository } from "./ITradesRepository";


class TradesRepository implements ITradesRepository {
  private trades: Trade[];

  constructor() {
    this.trades = []
  }

  create({ gbpToUsd, currencyExchange, usdToGbp, exchangeAmount }: Trade): void {
    let trade;
    if (!!gbpToUsd) {
      trade = {
        ...new Trade(),
        gbpToUsd,
        currencyExchange,
        exchangeAmount,
        date: new Date(),
      };
    } else {
      trade = {
        ...new Trade(),
        usdToGbp,
        currencyExchange,
        exchangeAmount,
        date: new Date(),
      }
    }

    this.trades.push(trade)
  }

  list(): Trade[] {
    return this.trades;
  }

  findByDate(date: string): Boolean {
    throw new Error("Method not implemented.");
  }
}

export { TradesRepository };