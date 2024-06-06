import { Module } from "@nestjs/common";
import { ArbitrageOpportunityModuleBase } from "./base/arbitrageOpportunity.module.base";
import { ArbitrageOpportunityService } from "./arbitrageOpportunity.service";
import { ArbitrageOpportunityController } from "./arbitrageOpportunity.controller";
import { ArbitrageOpportunityResolver } from "./arbitrageOpportunity.resolver";

@Module({
  imports: [ArbitrageOpportunityModuleBase],
  controllers: [ArbitrageOpportunityController],
  providers: [ArbitrageOpportunityService, ArbitrageOpportunityResolver],
  exports: [ArbitrageOpportunityService],
})
export class ArbitrageOpportunityModule {}
