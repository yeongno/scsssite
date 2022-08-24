import { Menu } from "@mui/material";
import React from "react";

function RightMenu(props) {
  const items = [
    { label: <a>Signin</a>, key: "mail" }, // remember to pass the key prop
    { label: <a>Signup</a>, key: "app" }, // which is required
  ];
  return <Menu items={items} />;
}
export default RightMenu;
