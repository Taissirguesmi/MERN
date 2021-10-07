import React from "react";
import { Admin, Resource } from "react-admin";
import dataprovider from "./dataproviders";


import clientIcon from "@material-ui/icons/Group";
import productIcon from "@material-ui/icons/Book";
import categorieIcon from "@material-ui/icons/MenuBook";
import commandeIcon from "@material-ui/icons/Bookmarks";
import fournisseurIcon from "@material-ui/icons/PeopleOutline";

import clientsList from "./components/clientsList";
import clientCreate from "./components/clientCreate";
import clientEdit from "./components/clientEdit.js";

import produitList from "./components/produitList";
import produitCreate from "./components/produitCreate";
import produitEdit from "./components/produitEdit.js";

import categorieList from "./components/categorieList";
import categorieCreate from "./components/categorieCreate";
import categorieEdit from "./components/categorieEdit.js";

import commandeList from "./components/commandeList";
import commandeCreate from "./components/commandeCreate";
import commandeEdit from "./components/commandeEdit.js";

import fournisseurList from "./components/fournisseurList";
import fournisseurCreate from "./components/fournisseurCreate";
import fournisseurEdit from "./components/fournisseurEdit.js";

function App() {
  return (
    <Admin dataProvider={dataprovider}>
      <Resource
        name="client"
        list={clientsList}
        create={clientCreate}
        edit={clientEdit}
        icon={clientIcon}
      ></Resource>
      <Resource
        name="produit"
        list={produitList}
        create={produitCreate}
        edit={produitEdit}
        icon={productIcon}
      ></Resource>
      <Resource
        name="categorie"
        list={categorieList}
        create={categorieCreate}
        edit={categorieEdit}
        icon={categorieIcon}
      ></Resource>
      <Resource
        name="commande"
        list={commandeList}
        create={commandeCreate}
        edit={commandeEdit}
        icon={commandeIcon}
      ></Resource>
      <Resource
        name="fournisseur"
        list={fournisseurList}
        create={fournisseurCreate}
        edit={fournisseurEdit}
        icon={fournisseurIcon}
      ></Resource>
    </Admin>
  );
}

export default App;
