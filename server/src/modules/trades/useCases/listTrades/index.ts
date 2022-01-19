import { TradesRepository } from "../../repositories/TradesRepository";
import { ListTradesController } from "./ListTradesController";
import { ListTradesUseCase } from "./ListTradesUseCase";

const tradesRepository = TradesRepository.getInstance();
const listTradesUseCase = new ListTradesUseCase(tradesRepository);
const listTradesController = new ListTradesController(listTradesUseCase)

export { listTradesController };