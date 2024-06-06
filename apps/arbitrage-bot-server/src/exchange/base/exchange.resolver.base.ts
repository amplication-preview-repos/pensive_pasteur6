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
import { Exchange } from "./Exchange";
import { ExchangeCountArgs } from "./ExchangeCountArgs";
import { ExchangeFindManyArgs } from "./ExchangeFindManyArgs";
import { ExchangeFindUniqueArgs } from "./ExchangeFindUniqueArgs";
import { CreateExchangeArgs } from "./CreateExchangeArgs";
import { UpdateExchangeArgs } from "./UpdateExchangeArgs";
import { DeleteExchangeArgs } from "./DeleteExchangeArgs";
import { PriceFindManyArgs } from "../../price/base/PriceFindManyArgs";
import { Price } from "../../price/base/Price";
import { ExchangeService } from "../exchange.service";
@graphql.Resolver(() => Exchange)
export class ExchangeResolverBase {
  constructor(protected readonly service: ExchangeService) {}

  async _exchangesMeta(
    @graphql.Args() args: ExchangeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Exchange])
  async exchanges(
    @graphql.Args() args: ExchangeFindManyArgs
  ): Promise<Exchange[]> {
    return this.service.exchanges(args);
  }

  @graphql.Query(() => Exchange, { nullable: true })
  async exchange(
    @graphql.Args() args: ExchangeFindUniqueArgs
  ): Promise<Exchange | null> {
    const result = await this.service.exchange(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Exchange)
  async createExchange(
    @graphql.Args() args: CreateExchangeArgs
  ): Promise<Exchange> {
    return await this.service.createExchange({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Exchange)
  async updateExchange(
    @graphql.Args() args: UpdateExchangeArgs
  ): Promise<Exchange | null> {
    try {
      return await this.service.updateExchange({
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

  @graphql.Mutation(() => Exchange)
  async deleteExchange(
    @graphql.Args() args: DeleteExchangeArgs
  ): Promise<Exchange | null> {
    try {
      return await this.service.deleteExchange(args);
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
    @graphql.Parent() parent: Exchange,
    @graphql.Args() args: PriceFindManyArgs
  ): Promise<Price[]> {
    const results = await this.service.findPrices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
