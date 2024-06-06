import { CryptocurrencyWhereUniqueInput } from "../cryptocurrency/CryptocurrencyWhereUniqueInput";
import { ExchangeWhereUniqueInput } from "../exchange/ExchangeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PriceWhereInput = {
  cryptocurrency?: CryptocurrencyWhereUniqueInput;
  exchange?: ExchangeWhereUniqueInput;
  id?: StringFilter;
  price?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
