import * as graphql from "@nestjs/graphql";
import { ArbitrageOpportunityResolverBase } from "./base/arbitrageOpportunity.resolver.base";
import { ArbitrageOpportunity } from "./base/ArbitrageOpportunity";
import { ArbitrageOpportunityService } from "./arbitrageOpportunity.service";

@graphql.Resolver(() => ArbitrageOpportunity)
export class ArbitrageOpportunityResolver extends ArbitrageOpportunityResolverBase {
  constructor(protected readonly service: ArbitrageOpportunityService) {
    super(service);
  }
}
