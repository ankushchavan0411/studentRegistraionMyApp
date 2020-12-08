import { Layout } from "antd";
import React, { useState } from "react";
import Menu from "./Menu";
import TopHeader from "./Header";

const { Sider, Content } = Layout;

export const Container = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu />
      </Sider>
      <Layout className="site-layout">
        <TopHeader setCollapsed={setCollapsed} collapsed={collapsed} />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
