import { CryptocurrencyWhereUniqueInput } from "../cryptocurrency/CryptocurrencyWhereUniqueInput";
import { ExchangeWhereUniqueInput } from "../exchange/ExchangeWhereUniqueInput";

export type PriceCreateInput = {
  cryptocurrency?: CryptocurrencyWhereUniqueInput | null;
  exchange?: ExchangeWhereUniqueInput | null;
  price?: number | null;
  timestamp?: Date | null;
};
