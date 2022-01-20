import { Trade } from "../../entities/Trade";
import { TradesRepository } from "../../repositories/TradesRepository";

class ListTradesUseCase {
  constructor(private tradesRepository: TradesRepository) {}

  async execute(): Promise<Trade[]> {
    const newTrade = await this.tradesRepository.list();

    return newTrade;
  }
}

export { ListTradesUseCase }