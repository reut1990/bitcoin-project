import UserStore from './UserStore';
import ContactStore from './ContactStore';


// const store = new RootStore()
// console.log(store.user)

export default class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.contactStore = new ContactStore(this);
  }
}
