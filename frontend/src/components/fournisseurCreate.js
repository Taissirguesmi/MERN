import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const fournisseurCreate = (props) => {
  return (
    <Create title="Create a Fournisseur" {...props}>
      <SimpleForm>
        <TextInput source="idF" />
        <TextInput source="nomF" />
        <TextInput source="prenomF" />
        <TextInput source="telF" />
      </SimpleForm>
    </Create>
  );
};
export default fournisseurCreate;
