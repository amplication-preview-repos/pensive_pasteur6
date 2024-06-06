import * as graphql from "@nestjs/graphql";
import { CryptocurrencyResolverBase } from "./base/cryptocurrency.resolver.base";
import { Cryptocurrency } from "./base/Cryptocurrency";
import { CryptocurrencyService } from "./cryptocurrency.service";

@graphql.Resolver(() => Cryptocurrency)
export class CryptocurrencyResolver extends CryptocurrencyResolverBase {
  constructor(protected readonly service: CryptocurrencyService) {
    super(service);
  }
}
