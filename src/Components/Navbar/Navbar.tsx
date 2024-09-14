import { Menu } from "antd";
import { SetStateAction, useState } from "react";
import { navigation } from "./Navbar.helpers";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e: { key: SetStateAction<string> }) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={navigation}
      />
      <div style={{ paddingBottom: "20px" }}></div>
      <Outlet />
    </>
  );
};

export default Navbar;
