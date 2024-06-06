import { Price } from "../price/Price";

export type Exchange = {
  apiUrl: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  prices?: Array<Price>;
  updatedAt: Date;
};
