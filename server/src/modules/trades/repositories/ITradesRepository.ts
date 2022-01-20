import { Trade } from "../entities/Trade";

interface ITradesRepository {
  list(): Promise<Trade[]>;
  create({}): Promise<Trade>;
  remove(id: string): Promise<Trade>;
}

export { ITradesRepository };