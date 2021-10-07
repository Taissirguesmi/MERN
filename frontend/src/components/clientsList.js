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

const clientFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="idCli" label="client" reference="client" allowEmpty>
    <SelectInput optionText="nomCli" />
  </ReferenceInput>,
];

export const clientsList = (props) => {
  return (
    <List filters={clientFilters} {...props}>
      <Datagrid>
        <TextField source="idCli" />
        <TextField source="nomCli" />
        <TextField source="prenomCli" />
        <TextField source="tel" />
        <EditButton basePath="/client" />
        <DeleteButton basePath="/client" />
      </Datagrid>
    </List>
  );
};
export default clientsList;
