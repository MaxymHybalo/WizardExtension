import { observable, action } from 'mobx';
import messenger from '../extension/messenger';

class Store {
    @observable jira = false;

    @observable test = 'some text';

    @action updateJIRA() {
      this.jira = !this.jira;
      messenger.sendMessage({ jira: this.jira });
    }
}

const store = new Store();
export default store;
