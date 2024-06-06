import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CRYPTOCURRENCY_TITLE_FIELD } from "../cryptocurrency/CryptocurrencyTitle";
import { EXCHANGE_TITLE_FIELD } from "../exchange/ExchangeTitle";

export const PriceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
