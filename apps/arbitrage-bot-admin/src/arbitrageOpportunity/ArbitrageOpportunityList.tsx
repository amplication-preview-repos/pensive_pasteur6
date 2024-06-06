import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ArbitrageOpportunityList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ArbitrageOpportunities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="buyExchange" source="buyExchange" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="crypto" source="crypto" />
        <TextField label="ID" source="id" />
        <TextField label="profit" source="profit" />
        <TextField label="sellExchange" source="sellExchange" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
