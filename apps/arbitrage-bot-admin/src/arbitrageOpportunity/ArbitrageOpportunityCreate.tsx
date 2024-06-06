import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ArbitrageOpportunityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="buyExchange" source="buyExchange" />
        <TextInput label="crypto" source="crypto" />
        <NumberInput label="profit" source="profit" />
        <TextInput label="sellExchange" source="sellExchange" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
