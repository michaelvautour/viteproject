import { Menu } from "antd";
import { SetStateAction, useState } from "react";
import { items } from "../App.helpers";

export default function Root() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e: { key: SetStateAction<string> }) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
