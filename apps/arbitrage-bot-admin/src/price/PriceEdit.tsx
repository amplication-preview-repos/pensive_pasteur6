import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { CryptocurrencyTitle } from "../cryptocurrency/CryptocurrencyTitle";
import { ExchangeTitle } from "../exchange/ExchangeTitle";

export const PriceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
