import React from 'react';
import { Tabs } from 'antd';
import Tweaks from './Tweaks';

const { TabPane } = Tabs;
const Layout = () => (
  <Tabs defaultActiveKey="1" tabPosition="left">
    <TabPane tab="Tweaks" key="1"><Tweaks /></TabPane>
    <TabPane tab="Scripts" key="2" />
    <TabPane tab="Other" key="3" />
    <TabPane tab="Settings" key="4" />
  </Tabs>
);

export default Layout;
