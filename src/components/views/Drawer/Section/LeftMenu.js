import { Menu } from "@mui/material";
import React from "react";

function LeftMenu(props) {
  const items = [
    { label: <a>Home</a>, key: "mail" }, // remember to pass the key prop
    { label: <a>Favorite</a>, key: "favorite" }, // which is required
  ];
  return <Menu style={{ display: "flex" }} items={items} />;
}

export default LeftMenu;
