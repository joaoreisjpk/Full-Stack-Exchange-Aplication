import { TradesRepository } from "../../repositories/TradesRepository";
import { CreateTradesController } from "./CreateTradesController";
import { CreateTradesUseCase } from "./CreateTradesUseCase";

const tradesRepository = TradesRepository.getInstance();
const createTradesUseCase = new CreateTradesUseCase(tradesRepository);
const createTradesController = new CreateTradesController(createTradesUseCase)

export { createTradesController };