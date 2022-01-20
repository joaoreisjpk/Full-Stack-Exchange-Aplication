import { Trade } from "../entities/Trade";
import { ITradesRepository } from "./ITradesRepository";

import { getRepository, Repository } from 'typeorm';

class TradesRepository implements ITradesRepository {
  private repository: Repository<Trade>

  constructor() {
    this.repository = getRepository(Trade)
  }

  async remove(id: string): Promise<Trade> {
    const newTradesArray = await this.repository.remove({ id })
    return newTradesArray;
  }

  async create({ baseCurrency, currentCurrencyValue, exchangeAmount, exchangeCurrency, moneyAmount }: Trade): Promise<Trade> {
    const trade = this.repository.create(
      {
        baseCurrency,
        currentCurrencyValue,
        exchangeAmount,
        exchangeCurrency,
        moneyAmount
      });

    await this.repository.save(trade)
    return trade;
  }

  async list(): Promise<Trade[]> {
    const tradeList = await this.repository.find();
    return tradeList;
  }
}

export { TradesRepository };