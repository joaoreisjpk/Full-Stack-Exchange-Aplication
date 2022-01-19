import { Trade } from "../model/Trade";

interface ITradesRepository {
  findByDate(date: string): Boolean;
  list(): Trade[];
  create({ }): void
}

export { ITradesRepository };