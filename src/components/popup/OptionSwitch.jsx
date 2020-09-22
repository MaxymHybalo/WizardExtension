import React from 'react';
import {
  Typography, Switch, Row, Col,
} from 'antd';

const { Text } = Typography;
const OptionSwitch = () => (
  <Row className="tab__pane">
    <Col span={18}>
      <Text>Blanc links in JIRa</Text>
    </Col>
    <Col span={6}>
      <Switch />
    </Col>
  </Row>
);

export default OptionSwitch;
