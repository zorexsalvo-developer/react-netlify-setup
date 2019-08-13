import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginContainer from './components/Login/LoginContainer';
import { Provider } from 'mobx-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import RootStore from './stores/RootStore';
import 'antd/dist/antd.css';

const rootStore = new RootStore();

ReactDOM.render(
  <Provider store={rootStore}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
