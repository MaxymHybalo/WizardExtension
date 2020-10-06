import React from 'react';
import { Card } from 'antd';
import { observer, inject } from 'mobx-react';
import OptionSwitch from './OptionSwitch';

const DISABLE_JIRA = 'Enable JIRA blank links';

const Tweaks = inject('Store')(observer(({ Store }) => {
  const changeJIRAStatus = (e) => {
    console.log('change state,', e, Store);
    Store.updateJIRA();
  };

  return (
    <Card>
      <OptionSwitch text={DISABLE_JIRA} active={Store.jira} handleChange={changeJIRAStatus} />
    </Card>
  );
}));

export default Tweaks;
