import { Module } from "@nestjs/common";
import { CryptocurrencyModuleBase } from "./base/cryptocurrency.module.base";
import { CryptocurrencyService } from "./cryptocurrency.service";
import { CryptocurrencyController } from "./cryptocurrency.controller";
import { CryptocurrencyResolver } from "./cryptocurrency.resolver";

@Module({
  imports: [CryptocurrencyModuleBase],
  controllers: [CryptocurrencyController],
  providers: [CryptocurrencyService, CryptocurrencyResolver],
  exports: [CryptocurrencyService],
})
export class CryptocurrencyModule {}
