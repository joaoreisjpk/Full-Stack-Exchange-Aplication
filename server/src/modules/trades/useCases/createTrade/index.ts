import { TradesRepository } from "../../repositories/TradesRepository";
import { CreateTradesController } from "./CreateTradesController";
import { CreateTradesUseCase } from "./CreateTradesUseCase";

console.log('Arquivo category')

export default () => {
  const tradesRepository = new TradesRepository();
  const createTradesUseCase = new CreateTradesUseCase(tradesRepository);
  
  return new CreateTradesController(createTradesUseCase)
}
