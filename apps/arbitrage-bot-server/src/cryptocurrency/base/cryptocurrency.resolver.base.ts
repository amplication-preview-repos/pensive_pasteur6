/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Cryptocurrency } from "./Cryptocurrency";
import { CryptocurrencyCountArgs } from "./CryptocurrencyCountArgs";
import { CryptocurrencyFindManyArgs } from "./CryptocurrencyFindManyArgs";
import { CryptocurrencyFindUniqueArgs } from "./CryptocurrencyFindUniqueArgs";
import { CreateCryptocurrencyArgs } from "./CreateCryptocurrencyArgs";
import { UpdateCryptocurrencyArgs } from "./UpdateCryptocurrencyArgs";
import { DeleteCryptocurrencyArgs } from "./DeleteCryptocurrencyArgs";
import { PriceFindManyArgs } from "../../price/base/PriceFindManyArgs";
import { Price } from "../../price/base/Price";
import { CryptocurrencyService } from "../cryptocurrency.service";
@graphql.Resolver(() => Cryptocurrency)
export class CryptocurrencyResolverBase {
  constructor(protected readonly service: CryptocurrencyService) {}

  async _cryptocurrenciesMeta(
    @graphql.Args() args: CryptocurrencyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Cryptocurrency])
  async cryptocurrencies(
    @graphql.Args() args: CryptocurrencyFindManyArgs
  ): Promise<Cryptocurrency[]> {
    return this.service.cryptocurrencies(args);
  }

  @graphql.Query(() => Cryptocurrency, { nullable: true })
  async cryptocurrency(
    @graphql.Args() args: CryptocurrencyFindUniqueArgs
  ): Promise<Cryptocurrency | null> {
    const result = await this.service.cryptocurrency(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Cryptocurrency)
  async createCryptocurrency(
    @graphql.Args() args: CreateCryptocurrencyArgs
  ): Promise<Cryptocurrency> {
    return await this.service.createCryptocurrency({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Cryptocurrency)
  async updateCryptocurrency(
    @graphql.Args() args: UpdateCryptocurrencyArgs
  ): Promise<Cryptocurrency | null> {
    try {
      return await this.service.updateCryptocurrency({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Cryptocurrency)
  async deleteCryptocurrency(
    @graphql.Args() args: DeleteCryptocurrencyArgs
  ): Promise<Cryptocurrency | null> {
    try {
      return await this.service.deleteCryptocurrency(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Price], { name: "prices" })
  async findPrices(
    @graphql.Parent() parent: Cryptocurrency,
    @graphql.Args() args: PriceFindManyArgs
  ): Promise<Price[]> {
    const results = await this.service.findPrices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
