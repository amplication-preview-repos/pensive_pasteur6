import { Price } from "../price/Price";

export type Cryptocurrency = {
  createdAt: Date;
  id: string;
  name: string | null;
  prices?: Array<Price>;
  symbolField: string | null;
  updatedAt: Date;
};
