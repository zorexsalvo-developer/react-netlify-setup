import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

import { observer } from 'mobx-react';
import './LoginContainer.scss';

class LoginContainer extends Component {
  render() {
    return (
      <Form className="login-form">
        <Form.Item>
          <Input prefix={<Icon type="user" />} placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" />}
            type="password"
            placeholder="Password"
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

export default observer(LoginContainer);
