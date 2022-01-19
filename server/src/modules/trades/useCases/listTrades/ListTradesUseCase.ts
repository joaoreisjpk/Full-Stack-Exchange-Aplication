import { TradesRepository } from "../../repositories/TradesRepository";

interface IRequest {
  baseCurrency?: string;
  exchangeCurrency?: string;
  moneyAmount?: number;
  currentCurrencyValue?: number;
  exchangeAmount?: number;
  date?: Date;
  id?: string;
}

class ListTradesUseCase {
  constructor(private tradesRepository: TradesRepository) {}

  execute(): IRequest[] {
    const newTrade = this.tradesRepository.list();

    return newTrade;
  }
}

export { ListTradesUseCase }