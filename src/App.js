import React from 'react';
import { Menu, Icon } from 'antd';

function App() {
  return (
    <div className="App">
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />
          Navigation One
        </Menu.Item>

        <Menu.Item key="app">
          <Icon type="appstore" />
          Navigation Two
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default App;
