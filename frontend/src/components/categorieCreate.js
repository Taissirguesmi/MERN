import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const categorieCreate = (props) => {
  return (
    <Create title="Create a Categorie" {...props}>
      <SimpleForm>
        <TextInput source="idCat" />
        <TextInput source="nomCat" />
      </SimpleForm>
    </Create>
  );
};
export default categorieCreate;
