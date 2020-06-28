import React from "react";
import { Layout, Menu, Breadcrumb, Row, Button, Badge, Col } from "antd";
const { Header } = Layout;

class MainHeader extends React.Component {
  render() {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <h3> TaskStar </h3>
      </Header>
    );
  }
}

export default MainHeader;
