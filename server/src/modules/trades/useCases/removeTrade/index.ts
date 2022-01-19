import { TradesRepository } from "../../repositories/TradesRepository";
import { RemoveTradesController } from "./RemoveTradesController";
import { RemoveTradesUseCase } from "./RemoveTradesUseCase";

const tradesRepository = TradesRepository.getInstance();
const removeTradesUseCase = new RemoveTradesUseCase(tradesRepository);
const removeTradesController = new RemoveTradesController(removeTradesUseCase)

export { removeTradesController };