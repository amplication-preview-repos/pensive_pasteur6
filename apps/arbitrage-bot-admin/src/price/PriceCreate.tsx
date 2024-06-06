import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { CryptocurrencyTitle } from "../cryptocurrency/CryptocurrencyTitle";
import { ExchangeTitle } from "../exchange/ExchangeTitle";

export const PriceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="cryptocurrency.id"
          reference="Cryptocurrency"
          label="cryptocurrency"
        >
          <SelectInput optionText={CryptocurrencyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="exchange.id"
          reference="Exchange"
          label="exchange"
        >
          <SelectInput optionText={ExchangeTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
