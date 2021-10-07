import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const clientEdit = (props) => {
  return (
    <Edit title="Edit a Client" {...props}>
      <SimpleForm>
        <TextInput disabled source="idCli" />
        <TextInput source="nomCli" />
        <TextInput source="prenomCli" />
        <TextInput source="tel" />
      </SimpleForm>
    </Edit>
  );
};
export default clientEdit;
