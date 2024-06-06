import { CryptocurrencyWhereInput } from "./CryptocurrencyWhereInput";
import { CryptocurrencyOrderByInput } from "./CryptocurrencyOrderByInput";

export type CryptocurrencyFindManyArgs = {
  where?: CryptocurrencyWhereInput;
  orderBy?: Array<CryptocurrencyOrderByInput>;
  skip?: number;
  take?: number;
};
