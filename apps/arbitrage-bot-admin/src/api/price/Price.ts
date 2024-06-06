import { Cryptocurrency } from "../cryptocurrency/Cryptocurrency";
import { Exchange } from "../exchange/Exchange";

export type Price = {
  createdAt: Date;
  cryptocurrency?: Cryptocurrency | null;
  exchange?: Exchange | null;
  id: string;
  price: number | null;
  timestamp: Date | null;
  updatedAt: Date;
};
