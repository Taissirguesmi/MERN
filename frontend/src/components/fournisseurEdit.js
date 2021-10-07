import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const fournisseurEdit = (props) => {
  return (
    <Edit title="Edit a Fournisseur" {...props}>
      <SimpleForm>
        <TextInput disabled source="idF" />
        <TextInput source="nomF" />
        <TextInput source="prenomF" />
        <TextInput source="telF" />
      </SimpleForm>
    </Edit>
  );
};
export default fournisseurEdit;
