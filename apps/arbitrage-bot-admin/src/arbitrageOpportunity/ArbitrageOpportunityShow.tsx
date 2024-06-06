import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ArbitrageOpportunityShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="buyExchange" source="buyExchange" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="crypto" source="crypto" />
        <TextField label="ID" source="id" />
        <TextField label="profit" source="profit" />
        <TextField label="sellExchange" source="sellExchange" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
