import { SortOrder } from "../../util/SortOrder";

export type ArbitrageOpportunityOrderByInput = {
  buyExchange?: SortOrder;
  createdAt?: SortOrder;
  crypto?: SortOrder;
  id?: SortOrder;
  profit?: SortOrder;
  sellExchange?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
