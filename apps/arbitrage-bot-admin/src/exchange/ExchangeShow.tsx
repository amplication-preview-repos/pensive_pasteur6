import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CRYPTOCURRENCY_TITLE_FIELD } from "../cryptocurrency/CryptocurrencyTitle";
import { EXCHANGE_TITLE_FIELD } from "./ExchangeTitle";

export const ExchangeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="apiUrl" source="apiUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Price"
          target="exchangeId"
          label="Prices"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="cryptocurrency"
              source="cryptocurrency.id"
              reference="Cryptocurrency"
            >
              <TextField source={CRYPTOCURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="exchange"
              source="exchange.id"
              reference="Exchange"
            >
              <TextField source={EXCHANGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="price" source="price" />
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
