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

const commandeFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="idCom" label="commande" reference="commande" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const commandeList = (props) => {
  return (
    <List filters={commandeFilters} {...props}>
      <Datagrid>
        <TextField source="idCom" />
        <TextField source="date" />
        <TextField source="prixCom" />
        
        <EditButton basePath="/commande" />
        <DeleteButton basePath="/commande" />
      </Datagrid>
    </List>
  );
};
export default commandeList;
