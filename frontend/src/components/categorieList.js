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

const categorieFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    source="idCat"
    label="categorie"
    reference="categorie"
    allowEmpty
  >
    <SelectInput optionText="nomCat" />
  </ReferenceInput>,
];

export const categorieList = (props) => {
  return (
    <List filters={categorieFilters} {...props}>
      <Datagrid>
        <TextField source="idCat" />
        <TextField source="nomCat" />

        <EditButton basePath="/categorie" />
        <DeleteButton basePath="/categorie" />
      </Datagrid>
    </List>
  );
};
export default categorieList;
