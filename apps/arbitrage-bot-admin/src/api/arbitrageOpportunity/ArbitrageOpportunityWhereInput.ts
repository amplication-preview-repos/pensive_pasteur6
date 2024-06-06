import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ArbitrageOpportunityWhereInput = {
  buyExchange?: StringNullableFilter;
  crypto?: StringNullableFilter;
  id?: StringFilter;
  profit?: FloatNullableFilter;
  sellExchange?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
