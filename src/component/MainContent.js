import React from "react";
import { Layout, Menu, Breadcrumb, Row, Button, Badge, Col } from "antd";
import "./MainContent.css";

import MainHeader from "./MainHeader/MainHeader.js";
import LeftMenu from "./LeftMenu/LeftMenu.js";
import MainFooter from "./MainFooter/MainFooter.js";
import TaskPanel from "./TaskPanel/TaskPanel.js";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Layout style={{ minHeight: "100vh" }}>
            <LeftMenu />
            <Layout className="site-layout">
              <MainHeader />
              <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item> */}

                  <p> Mian Task will be here .. </p>
                </Breadcrumb>
                <div>
                  <TaskPanel />
                </div>
              </Content>
              <MainFooter />
            </Layout>
          </Layout>
        </div>
      </div>
    );
  }
}

export default MainContent;
