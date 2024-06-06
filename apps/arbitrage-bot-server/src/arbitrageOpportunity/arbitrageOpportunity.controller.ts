import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArbitrageOpportunityService } from "./arbitrageOpportunity.service";
import { ArbitrageOpportunityControllerBase } from "./base/arbitrageOpportunity.controller.base";

@swagger.ApiTags("arbitrageOpportunities")
@common.Controller("arbitrageOpportunities")
export class ArbitrageOpportunityController extends ArbitrageOpportunityControllerBase {
  constructor(protected readonly service: ArbitrageOpportunityService) {
    super(service);
  }
}
