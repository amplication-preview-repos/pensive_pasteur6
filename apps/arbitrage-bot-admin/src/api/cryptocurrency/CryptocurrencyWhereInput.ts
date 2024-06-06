import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PriceListRelationFilter } from "../price/PriceListRelationFilter";

export type CryptocurrencyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  prices?: PriceListRelationFilter;
  symbolField?: StringNullableFilter;
};
