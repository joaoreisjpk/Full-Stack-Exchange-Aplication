import { Trade } from "../../entities/Trade";
import { TradesRepository } from "../../repositories/TradesRepository";

class RemoveTradesUseCase {
  constructor(private tradesRepository: TradesRepository) {}

  async execute(id: string): Promise<Trade> {
    const newTrade = await this.tradesRepository.remove(id);

    return newTrade;
  }
}

export { RemoveTradesUseCase }