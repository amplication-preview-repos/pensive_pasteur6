/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { PriceCreateNestedManyWithoutCryptocurrenciesInput } from "./PriceCreateNestedManyWithoutCryptocurrenciesInput";
import { Type } from "class-transformer";

@InputType()
class CryptocurrencyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PriceCreateNestedManyWithoutCryptocurrenciesInput,
  })
  @ValidateNested()
  @Type(() => PriceCreateNestedManyWithoutCryptocurrenciesInput)
  @IsOptional()
  @Field(() => PriceCreateNestedManyWithoutCryptocurrenciesInput, {
    nullable: true,
  })
  prices?: PriceCreateNestedManyWithoutCryptocurrenciesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  symbolField?: string | null;
}

export { CryptocurrencyCreateInput as CryptocurrencyCreateInput };
