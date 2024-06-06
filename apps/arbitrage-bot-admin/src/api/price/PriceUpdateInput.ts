import { CryptocurrencyWhereUniqueInput } from "../cryptocurrency/CryptocurrencyWhereUniqueInput";
import { ExchangeWhereUniqueInput } from "../exchange/ExchangeWhereUniqueInput";

export type PriceUpdateInput = {
  cryptocurrency?: CryptocurrencyWhereUniqueInput | null;
  exchange?: ExchangeWhereUniqueInput | null;
  price?: number | null;
  timestamp?: Date | null;
};
