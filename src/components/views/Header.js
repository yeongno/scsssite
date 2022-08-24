import { MenuOutlined } from "@ant-design/icons";
import { SearchOutlined, ShoppingBasket } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Drawer } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.scss";
import LeftMenu from "./Drawer/Section/LeftMenu";
import RightMenu from "./Drawer/Section/RightMenu";

function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to="/women">Women</Link>
            <Link to="/men">men</Link>
            <Link to="/denim">denim</Link>
            <Link to="/shop" className="orange">
              The Gift Shop
            </Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="logo">
          <h1>Eshopland</h1>
        </div>
        <div className="right">
          <div className="search">
            <SearchOutlined className="search-icon" />
            <button className="sch-btn">Search</button>
          </div>
          <div className="right-buttons">
            <button>
              <Link to="/login">Log In</Link>
            </button>
            <button>
              <Link to="/sign-up">Sign Up</Link>
            </button>
            <ShoppingBasket className="basket" />
          </div>
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <MenuOutlined type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </nav>
    </div>
  );
}

export default Header;
