import ContactService from '../services/ContactService';
import { observable, action, computed } from 'mobx';

export default class ContactStore {
  @observable
  contacts = [];
  @observable
  currContact = {};


  constructor(rootStore) {
    this.rootStore = rootStore;
  }


  // get contactsCollection() {
  //   return { contacts: this.contacts, currContact: this.currContact }
  // }

  @action
  async fetchContacts(filter) {
    this.contacts = await ContactService.getContacts(filter);
  }
  @action
  async fetchContact(id) {
    var currContact = await ContactService.getContactById(id);
    this.currContact = currContact;
    // return this.currContact
  }
}
