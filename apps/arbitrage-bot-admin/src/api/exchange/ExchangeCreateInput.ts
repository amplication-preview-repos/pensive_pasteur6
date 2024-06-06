import { PriceCreateNestedManyWithoutExchangesInput } from "./PriceCreateNestedManyWithoutExchangesInput";

export type ExchangeCreateInput = {
  apiUrl?: string | null;
  name?: string | null;
  prices?: PriceCreateNestedManyWithoutExchangesInput;
};
