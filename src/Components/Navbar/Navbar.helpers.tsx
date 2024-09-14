import { Link } from "react-router-dom";

export const navigation = [
  {
    label: <Link to="/">Home Page</Link>,
    key: "home",
    // icon: <MailOutlined />,
  },
  {
    label: <Link to="/Todos">Todos</Link>,
    key: "todo",
    // icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: <Link to="/Vite">Vite</Link>,
    key: "vite",
    // icon: <AppstoreOutlined />,
    // disabled: true,
  },
  //   {
  //     label: "Navigation Three - Submenu",
  //     key: "SubMenu",
  //     // icon: <SettingOutlined />,
  //     children: [
  //       {
  //         type: "group",
  //         label: "Item 1",
  //         children: [
  //           {
  //             label: "Option 1",
  //             key: "setting:1",
  //           },
  //           {
  //             label: "Option 2",
  //             key: "setting:2",
  //           },
  //         ],
  //       },
  //       {
  //         type: "group",
  //         label: "Item 2",
  //         children: [
  //           {
  //             label: "Option 3",
  //             key: "setting:3",
  //           },
  //           {
  //             label: "Option 4",
  //             key: "setting:4",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     key: "alipay",
  //     label: (
  //       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //         Navigation Four - Link
  //       </a>
  //     ),
  //   },
];
