import { observable, action } from 'mobx';

class Store {
    @observable jira = false;

    @observable test = 'some text';

    @action updateJIRA() {
      this.jira = !this.jira;
    }
}

const store = new Store();
export default store;
