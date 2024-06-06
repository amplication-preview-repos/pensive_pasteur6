import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CryptocurrencyService } from "./cryptocurrency.service";
import { CryptocurrencyControllerBase } from "./base/cryptocurrency.controller.base";

@swagger.ApiTags("cryptocurrencies")
@common.Controller("cryptocurrencies")
export class CryptocurrencyController extends CryptocurrencyControllerBase {
  constructor(protected readonly service: CryptocurrencyService) {
    super(service);
  }
}
