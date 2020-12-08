import React from "react";
import { Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

const Menus = () => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      View Student
    </Menu.Item>
    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
      Add Student
    </Menu.Item>
  </Menu>
);

export default Menus;
