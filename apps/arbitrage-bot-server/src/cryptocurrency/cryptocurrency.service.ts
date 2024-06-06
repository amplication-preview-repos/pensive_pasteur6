import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CryptocurrencyServiceBase } from "./base/cryptocurrency.service.base";

@Injectable()
export class CryptocurrencyService extends CryptocurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
