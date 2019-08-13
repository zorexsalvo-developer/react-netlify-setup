import { decorate, observable, action } from 'mobx';

class LoginStore {
  constructor(rootStore) {
    console.log(rootStore);
    this.username = '';
    this.password = '';
  }

  setUsername(value) {
    this.username = value;
  }

  setPassword(value) {
    this.password = value;
  }
}

export default decorate(LoginStore, {
  username: observable,
  password: observable,

  setUsername: action,
  setPassword: action
});
