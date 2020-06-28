import React from "react";
import { Card, Avatar, Row, Col, Radio } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

class Task extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Card
          style={{ maxWidth: 350 }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Row>
            <Col span={12} style={{ textAlign: "left" }}>
              <h3>Type Name </h3>
            </Col>
            <Col
              span={12}
              style={{
                textAlign: "right",
              }}
            >
              <i>july 22, 2020</i>
            </Col>
          </Row>
          <Row>
            <p style={{ maxWidth: "90%", textAlign: "left" }}>
              Description: this is card from Task Panelthis is card from Task
              Panelthis is card from Task Panelthis is card from Task Panelthis
              is card from Task Panel
            </p>
          </Row>

          <Row>
            Priority Level : <b> High </b>
            {false && (
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>Low</Radio>
                <Radio value={2}>Mid</Radio>
                <Radio value={3}>High</Radio>
              </Radio.Group>
            )}
          </Row>
        </Card>
      </div>
    );
    // <Card>this is card from Task Panel</Card>;
  }
}

export default Task;
