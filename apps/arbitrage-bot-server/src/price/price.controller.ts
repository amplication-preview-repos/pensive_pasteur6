import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PriceService } from "./price.service";
import { PriceControllerBase } from "./base/price.controller.base";

@swagger.ApiTags("prices")
@common.Controller("prices")
export class PriceController extends PriceControllerBase {
  constructor(protected readonly service: PriceService) {
    super(service);
  }
}
