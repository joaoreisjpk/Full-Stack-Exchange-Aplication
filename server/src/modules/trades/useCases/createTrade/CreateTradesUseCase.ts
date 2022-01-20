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

class CreateTradesUseCase {
  constructor(private tradesRepository: TradesRepository) {}

  async execute(data: IRequest): Promise<IRequest> {
    const newTrade = await this.tradesRepository.create(data);

    return newTrade;
  }
}

export { CreateTradesUseCase }