import React from 'react';
import { Card } from 'antd';
import { observer, inject } from 'mobx-react';
import OptionSwitch from './OptionSwitch';

const disableJIRA = 'Enable JIRA blank links';
const Tweaks = inject('Store')(observer(({ Store }) => (
  <Card>
    <OptionSwitch text={disableJIRA} active={Store.jira} />
  </Card>
)));

export default Tweaks;
