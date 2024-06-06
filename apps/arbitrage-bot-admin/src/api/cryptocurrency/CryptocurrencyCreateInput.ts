import { PriceCreateNestedManyWithoutCryptocurrenciesInput } from "./PriceCreateNestedManyWithoutCryptocurrenciesInput";

export type CryptocurrencyCreateInput = {
  name?: string | null;
  prices?: PriceCreateNestedManyWithoutCryptocurrenciesInput;
  symbolField?: string | null;
};
