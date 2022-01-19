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

class RemoveTradesUseCase {
  constructor(private tradesRepository: TradesRepository) {}

  execute(id: string): IRequest[] {
    const newTrade = this.tradesRepository.remove(id);

    return newTrade;
  }
}

export { RemoveTradesUseCase }