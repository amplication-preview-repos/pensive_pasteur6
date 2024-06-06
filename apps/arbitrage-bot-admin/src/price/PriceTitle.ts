import { Price as TPrice } from "../api/price/Price";

export const PRICE_TITLE_FIELD = "id";

export const PriceTitle = (record: TPrice): string => {
  return record.id?.toString() || String(record.id);
};
