import { ArbitrageOpportunity as TArbitrageOpportunity } from "../api/arbitrageOpportunity/ArbitrageOpportunity";

export const ARBITRAGEOPPORTUNITY_TITLE_FIELD = "buyExchange";

export const ArbitrageOpportunityTitle = (
  record: TArbitrageOpportunity
): string => {
  return record.buyExchange?.toString() || String(record.id);
};
