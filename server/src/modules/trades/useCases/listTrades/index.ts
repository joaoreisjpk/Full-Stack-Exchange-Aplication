import { TradesRepository } from "../../repositories/TradesRepository";
import { ListTradesController } from "./ListTradesController";
import { ListTradesUseCase } from "./ListTradesUseCase";

export default () => {
  const tradesRepository = new TradesRepository();
  const createTradesUseCase = new ListTradesUseCase(tradesRepository);

  return new ListTradesController(createTradesUseCase)
}