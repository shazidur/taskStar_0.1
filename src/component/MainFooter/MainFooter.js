import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

class MainFooter extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        taskStar ©2020 Created by Shazidur Rahman
      </Footer>
    );
  }
}

export default MainFooter;
