import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

const fournisseurFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    source="idF"
    label="fournisseur"
    reference="fournisseur"
    allowEmpty
  >
    <SelectInput optionText="nomF" />
  </ReferenceInput>,
];

export const fournisseurList = (props) => {
  return (
    <List filters={fournisseurFilters} {...props}>
      <Datagrid>
        <TextField source="idF" />
        <TextField source="nomF" />
        <TextField source="prenomF" />
        <TextField source="telF" />
        <EditButton basePath="/fournisseur" />
        <DeleteButton basePath="/fournisseur" />
      </Datagrid>
    </List>
  );
};
export default fournisseurList;
