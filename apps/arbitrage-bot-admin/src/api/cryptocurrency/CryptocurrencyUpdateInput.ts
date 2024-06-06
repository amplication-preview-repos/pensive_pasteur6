import { PriceUpdateManyWithoutCryptocurrenciesInput } from "./PriceUpdateManyWithoutCryptocurrenciesInput";

export type CryptocurrencyUpdateInput = {
  name?: string | null;
  prices?: PriceUpdateManyWithoutCryptocurrenciesInput;
  symbolField?: string | null;
};
