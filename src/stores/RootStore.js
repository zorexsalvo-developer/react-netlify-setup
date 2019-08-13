import LoginStore from './LoginStore.js';

export default class RootStore {
  constructor() {
    this.loginStore = new LoginStore();
  }
}
