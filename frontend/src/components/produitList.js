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

const produitFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="idP" label="produit" reference="produit" allowEmpty>
    <SelectInput optionText="lib" />
  </ReferenceInput>,
];

export const produitList = (props) => {
  return (
    <List filters={produitFilters} {...props}>
      <Datagrid>
        <TextField source="idP" />
        <TextField source="lib" />
        <TextField source="quantite" />
        <TextField source="dimention" />
        <TextField source="prix" />
        <EditButton basePath="/produit" />
        <DeleteButton basePath="/produit" />
      </Datagrid>
    </List>
  );
};
export default produitList;
