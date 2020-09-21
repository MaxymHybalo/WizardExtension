import 'antd/dist/antd.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Switch, Tabs, Typography, Card } from 'antd';

const { TabPane } = Tabs;
const { Text } = Typography;

console.log('Try Create new reac view');

ReactDOM.render(
  <Tabs defaultActiveKey="1" tabPosition="left">
      <TabPane tab="Tweaks" key="1">
          <Card bordered={false}>
            <Text>Blanc links in JIRA</Text>
            <Switch/>
          </Card>
      </TabPane>
      <TabPane tab="Scripts" key="2"></TabPane>
      <TabPane tab="Other" key="3"></TabPane>
      <TabPane tab="Settings" key="4"></TabPane>

  </Tabs>,
  document.getElementById('root')
);

