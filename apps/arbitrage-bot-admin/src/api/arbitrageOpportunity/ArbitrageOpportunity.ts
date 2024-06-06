export type ArbitrageOpportunity = {
  buyExchange: string | null;
  createdAt: Date;
  crypto: string | null;
  id: string;
  profit: number | null;
  sellExchange: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
