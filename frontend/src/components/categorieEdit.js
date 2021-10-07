import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const categorieEdit = (props) => {
  return (
    <Edit title="Edit a Categorie" {...props}>
      <SimpleForm>
        <TextInput disabled source="idCat" />
        <TextInput source="nomCat" />
      </SimpleForm>
    </Edit>
  );
};
export default categorieEdit;
