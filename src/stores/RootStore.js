import LoginStore from './LoginStore.js';

export default class RootStore {
  constructor() {
    this.login = new LoginStore(this);
  }
}
