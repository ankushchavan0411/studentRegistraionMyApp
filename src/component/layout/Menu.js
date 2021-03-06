import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { TeamOutlined, UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import * as Routes from "../../lib/constants/routes";

const Menus = () => {
  const [selectedKey, setSelectedKey] = useState(Routes.VIEW_STUDENT);

  useEffect(() => {
    setSelectedKey();
  }, []);

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[selectedKey]}
      // onSelect={({ key }) => setSelectedKey(key)}
    >
      <Menu.Item key={Routes.VIEW_STUDENT} icon={<TeamOutlined />}>
        <Link to={Routes.VIEW_STUDENT}>View Student</Link>
      </Menu.Item>
      <Menu.Item key={Routes.ADD_STUDENT} icon={<UserAddOutlined />}>
        <Link to={Routes.ADD_STUDENT}>Add Student</Link>
      </Menu.Item>
    </Menu>
  );
};
export default Menus;
