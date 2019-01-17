import React, { Component } from 'react'
import ContactService from '../../services/ContactService'
import UserService from '../../services/UserService'
import './ContactDetailsPage.css'
import { Link } from 'react-router-dom'
import TransferFund from '../../components/TransferFund'
import MovesList from '../../components/movesList/MovesList'
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import ContactStore from '../../store/ContactStore';


@inject('store')
@observer
class ContactDetailsPage extends Component {
    contactStore = this.props.store.contactStore

    state = {
        contact: {},
        show: ''
    }


    async componentDidMount() {
        const id = this.props.match.params.id;
        await this.contactStore.fetchContact(id);

        const contact = this.contactStore.currContact
        if (id) this.setState({ contact, show:true })
        else this.setState({contact, show:false})
    }

    onTransferCoins(amount) {
        UserService.addMove(this.contact, amount);
        this.props.store.userStore.fetchUser()
        UserService.updateCoinsBalance(amount);
    }


    render() {
        const { user } = this.props.store.userStore
        const { contact } = this.state
        // const props2={inCmp:"contactDetails", movesList:user.moves, title:"Your Moves:"}
        return (
            this.state.show &&
            <section className="contact-details">

                <div className="buttons-container">
                    <Link to='/contacts'>Back</Link>
                    <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                </div>
                <img src={`https://robohash.org/${contact.name}.png`} alt="contactImg"></img>
                <p className="contact-name">{contact.name}</p>
                <p className="contact-email"><span>Email:</span>{contact.email}</p>
                <p className="contact-phone"><span>Phone:</span>{contact.phone}</p>

                <TransferFund
                    contact={contact}
                    maxCoins={user.coins}
                    onTransferCoins={this.onTransferCoins.bind(this)}
                />
                <MovesList
                    inCmp="contactDetails"
                    movesList={user.moves}
                    title="Your Moves:"
                    contactId={contact._id}
                />


            </section>
        )

    }
}

export default ContactDetailsPage
