import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PriceTitle } from "../price/PriceTitle";

export const ExchangeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiUrl" source="apiUrl" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="prices"
          reference="Price"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PriceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
