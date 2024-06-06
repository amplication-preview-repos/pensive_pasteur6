import { PriceUpdateManyWithoutExchangesInput } from "./PriceUpdateManyWithoutExchangesInput";

export type ExchangeUpdateInput = {
  apiUrl?: string | null;
  name?: string | null;
  prices?: PriceUpdateManyWithoutExchangesInput;
};
