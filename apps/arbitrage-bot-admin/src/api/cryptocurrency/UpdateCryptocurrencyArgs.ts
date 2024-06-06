import { CryptocurrencyWhereUniqueInput } from "./CryptocurrencyWhereUniqueInput";
import { CryptocurrencyUpdateInput } from "./CryptocurrencyUpdateInput";

export type UpdateCryptocurrencyArgs = {
  where: CryptocurrencyWhereUniqueInput;
  data: CryptocurrencyUpdateInput;
};
