import '../styles/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { browserHistory } from 'react-router';
import makeRoutes from './routes';
import Root from 'containers/Root';
import makeStore from './redux/store';


const initialState = window.__INITIAL_STATE__ || {};
const store = makeStore(initialState);
const routes = makeRoutes();

const mountNode = document.getElementById('root');

Modal.setAppElement(mountNode);
ReactDOM.render(
  <Root history={browserHistory} routes={routes} store={store} />,
  mountNode
);
