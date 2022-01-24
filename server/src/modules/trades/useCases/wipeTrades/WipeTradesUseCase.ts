import { Trade } from "../../entities/Trade";
import { TradesRepository } from "../../repositories/TradesRepository";

class WipeTradesUseCase {
  constructor(private tradesRepository: TradesRepository) {}

  async execute(): Promise<void> {
    await this.tradesRepository.wipe();
  }
}

export { WipeTradesUseCase }