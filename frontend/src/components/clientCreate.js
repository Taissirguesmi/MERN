import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const clientCreate = (props) => {
  return (
    <Create title="Create a Client" {...props}>
      <SimpleForm>
        <TextInput source="idCli" />
        <TextInput source="nomCli" />
        <TextInput source="prenomCli" />
        <TextInput source="tel" />
      </SimpleForm>
    </Create>
  );
};
export default clientCreate;
