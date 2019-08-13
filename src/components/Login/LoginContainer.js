import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { inject } from 'mobx-react';

import { observer } from 'mobx-react';
import './LoginContainer.scss';

class LoginContainer extends Component {
  render() {
    const { username, password } = this.props.store.login;
    return (
      <Form className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" />}
            placeholder="Username"
            value={username}
            onChange={e => this.props.store.login.setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => this.props.store.login.setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default inject('store')(observer(LoginContainer));
