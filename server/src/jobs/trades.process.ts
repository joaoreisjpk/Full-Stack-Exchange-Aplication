import { Job } from "bull";
import { TradesRepository } from "../modules/trades/repositories/TradesRepository";

const tradeProcess = async (job: Job) => {
  const createTradesRepository = new TradesRepository;

  createTradesRepository.create(job.data)
};

export default tradeProcess;