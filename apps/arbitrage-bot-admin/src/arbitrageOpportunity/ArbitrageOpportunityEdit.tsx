import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ArbitrageOpportunityEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="buyExchange" source="buyExchange" />
        <TextInput label="crypto" source="crypto" />
        <NumberInput label="profit" source="profit" />
        <TextInput label="sellExchange" source="sellExchange" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
