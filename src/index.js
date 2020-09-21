import 'antd/dist/antd.min.css';
import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Switch, Tabs, Typography, Card} from 'antd';

const { TabPane } = Tabs;
const { Text } = Typography;

ReactDOM.render(
  <Tabs defaultActiveKey="1" tabPosition="left">
    <TabPane className="tab__pane" tab="Tweaks" key="1">
      <Card bordered={false}>
        <Text>Blanc links in JIRA</Text>
        <Switch/>
      </Card>
    </TabPane>
    <TabPane tab="Scripts" key="2"></TabPane>
    <TabPane tab="Other" key="3"></TabPane>
    <TabPane tab="Settings" key="4"></TabPane>
  </Tabs>
  ,
  document.getElementById('root')
);

