import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const produitCreate = (props) => {
  return (
    <Create title="Create a Produit" {...props}>
      <SimpleForm>
        <TextInput source="idP" />
        <TextInput source="lib" />
        <TextInput source="quantite" />
        <TextInput source="dimention" />
        <TextInput source="prix" />
      </SimpleForm>
    </Create>
  );
};
export default produitCreate;
