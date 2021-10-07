import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const produitEdit = (props) => {
  return (
    <Edit title="Edit a Product" {...props}>
      <SimpleForm>
        <TextInput disabled source="idP" />
        <TextInput source="lib" />
        <TextInput source="quantite" />
        <TextInput source="dimention" />
        <TextInput source="prix" />
      </SimpleForm>
    </Edit>
  );
};
export default produitEdit;
