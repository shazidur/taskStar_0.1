import React from "react";
import { Card, Row, Col, Avatar } from "antd";
import Task from "./Task/Task.js";
import "./TaskPanel.css";

class TaskPanel extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={6} style={{ margin: "2px" }}>
            <Task />
          </Col>
          <Col span={6} style={{ margin: "2px" }}>
            <Task />
          </Col>
          <Col span={6} style={{ margin: "2px" }}>
            <Task />
          </Col>
        </Row>
      </div>
    );
    // <Card>this is card from Task Panel</Card>;
  }
}

export default TaskPanel;
