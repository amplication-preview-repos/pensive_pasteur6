import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PriceListRelationFilter } from "../price/PriceListRelationFilter";

export type ExchangeWhereInput = {
  apiUrl?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  prices?: PriceListRelationFilter;
};
