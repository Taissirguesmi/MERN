import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const commandeEdit = (props) => {
  return (
    <Edit title="Edit a Commande" {...props}>
      <SimpleForm>
        <TextInput disabled source="idCom" />
        <TextInput source="date" />
        <TextInput source="prixCom" />
      </SimpleForm>
    </Edit>
  );
};
export default commandeEdit;
