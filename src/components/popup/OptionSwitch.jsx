/* eslint-disable react/prop-types */
import React from 'react';
import {
  Typography, Switch, Row, Col,
} from 'antd';

const { Text } = Typography;

const OptionSwitch = (props) => {
  const { text, active, handleChange } = props;

  return (
    <Row className="tab__pane">
      <Col span={18}>
        <Text>{text}</Text>
      </Col>
      <Col span={6}>
        <Switch onClick={handleChange} checked={active} />
      </Col>
    </Row>
  );
};

export default OptionSwitch;
