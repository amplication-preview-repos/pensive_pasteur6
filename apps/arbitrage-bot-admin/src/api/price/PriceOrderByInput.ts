import { SortOrder } from "../../util/SortOrder";

export type PriceOrderByInput = {
  createdAt?: SortOrder;
  cryptocurrencyId?: SortOrder;
  exchangeId?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
