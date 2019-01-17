
import React, { Component } from 'react'
import './ContactPage.css'
import ContactList from '../../components/ContactsList'
import ContactFilter from '../../components/ContactFilter'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

@inject('store')
@observer
class ContactPage extends Component {

    ContactStore = this.props.store.contactStore;

    @observable
    nameFilter = ''


    componentDidMount() {
        this.props.store.contactStore.fetchContacts({ term: null })
    }


     handleNameChange(e) {
        const { value } = e.target;
        this.nameFilter = value;
        this.ContactStore.fetchContacts({ term: value }); 

    }

    render() {
        return (
            <div className="contact-page">
                <header>
                    <h1>Contacts</h1>
                </header>
                <Link to="/contact/addContact">
                    <div className="new-contact">
                        <img src="https://img.icons8.com/metro/52/000000/plus.png" alt="new contact" />
                    </div>
                </Link>
                <ContactFilter
                    value={this.nameFilter}
                    onFilterNameChange={this.handleNameChange.bind(this)}
                />

                {
                    <ContactList contacts={this.ContactStore.contacts} />
                }

            </div>

        );
    }

}

export default ContactPage