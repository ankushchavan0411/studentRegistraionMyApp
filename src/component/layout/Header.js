import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";

const { Header } = Layout;

const TopHeader = ({ collapsed, setCollapsed }) => (
  <Header className="site-layout-background" style={{ padding: 0 }}>
    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: "trigger",
      onClick: () => setCollapsed(!collapsed),
    })}
  </Header>
);
export default TopHeader;
