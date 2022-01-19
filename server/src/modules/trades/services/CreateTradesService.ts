import { TradesRepository } from "../repositories/TradesRepository";

interface IRequest {
  baseCurrency?: string;
  exchangeCurrency?: string;
  moneyAmount?: number;
  currentCurrencyValue?: number;
  exchangeAmount?: number;
  date?: Date;
  id?: string;
}

class CreateTradesService {
  constructor(private tradesRepository: TradesRepository) {}

  execute(data: IRequest): IRequest {
    const newTrade = this.tradesRepository.create(data);

    return newTrade;
  }
}

export { CreateTradesService }