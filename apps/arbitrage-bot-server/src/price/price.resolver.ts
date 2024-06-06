import * as graphql from "@nestjs/graphql";
import { PriceResolverBase } from "./base/price.resolver.base";
import { Price } from "./base/Price";
import { PriceService } from "./price.service";

@graphql.Resolver(() => Price)
export class PriceResolver extends PriceResolverBase {
  constructor(protected readonly service: PriceService) {
    super(service);
  }
}
