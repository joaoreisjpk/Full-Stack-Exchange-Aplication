import { Trade } from "../model/Trade";

interface ITradesRepository {
  list(): Trade[];
  create({}): void;
  remove(id: string): void;
}

export { ITradesRepository };