import { Cryptocurrency as TCryptocurrency } from "../api/cryptocurrency/Cryptocurrency";

export const CRYPTOCURRENCY_TITLE_FIELD = "name";

export const CryptocurrencyTitle = (record: TCryptocurrency): string => {
  return record.name?.toString() || String(record.id);
};
