import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const commandeCreate = (props) => {
  return (
    <Create title="Create a Commande" {...props}>
      <SimpleForm>
        <TextInput source="idCom" />
        <TextInput source="date" />
        <TextInput source="prixCom" />
      </SimpleForm>
    </Create>
  );
};
export default commandeCreate;
