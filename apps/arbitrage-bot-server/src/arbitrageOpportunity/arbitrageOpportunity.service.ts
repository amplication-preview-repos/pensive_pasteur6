import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArbitrageOpportunityServiceBase } from "./base/arbitrageOpportunity.service.base";

@Injectable()
export class ArbitrageOpportunityService extends ArbitrageOpportunityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
