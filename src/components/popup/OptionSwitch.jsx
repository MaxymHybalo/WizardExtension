/* eslint-disable react/prop-types */
import React from 'react';
import {
  Typography, Switch, Row, Col,
} from 'antd';

const { Text } = Typography;

const OptionSwitch = (props) => {
  const { text, active } = props;

  const sendMessage = () => {
    console.log('send message');
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ }, (tabs) => {
      console.log('tabs', tabs);
      // eslint-disable-next-line no-undef
      chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, (response) => {
        console.log(response);
      });
    });
  };
  return (
    <Row className="tab__pane">
      <Col span={18}>
        <Text>{text}</Text>
      </Col>
      <Col span={6}>
        <Switch onClick={sendMessage} checked={active} />
      </Col>
    </Row>
  );
};

export default OptionSwitch;
