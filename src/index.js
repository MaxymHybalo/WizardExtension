/* eslint-disable import/prefer-default-export */
import 'antd/dist/antd.min.css';
import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from './store/Store';

import Layout from './components/popup/Layout';

console.log(store);
ReactDOM.render(
  <Provider Store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root'),
);
