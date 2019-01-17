
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ContactEditPage.css'
import remove from "../../assets/img/delete.png"
import backImg from "../../assets/img/back.png"
import contactService from "../../services/ContactService"
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

@inject('store')
@observer
class ContactEditPage extends Component {
    contactStore = this.props.store.contactStore
    state = {
        contact: {},
        back: ''
    }



    async componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            await this.contactStore.fetchContact(id)
            const contact = this.contactStore.currContact;
            this.setState({ contact, back: `/contact/${contact._id}` })
        } else {
            this.setState({
                contact: {
                    name: '',
                    phone: '',
                    email: ''
                }, back: '/contacts'
            });
        }
    }

    handleChangeArrow = (propertyName) => (e) => {
        const contact = this.state.contact;
        contact[propertyName] = e.target.value;
        this.setState({ contact: contact });
    }

    handleChange(propertyName, event) {
        const contact = this.state.contact;
        contact[propertyName] = event.target.value;
        this.setState({ contact: contact });

    }
    handleSubmit = async event => {
        event.preventDefault();
        await contactService.saveContact(this.state.contact);
        const { history } = this.props;
        history.push('/contacts')
    }
    async handleDelete() {
        await contactService.deleteContact(this.state.contact._id);
        const { history } = this.props;
        history.push('/contacts')
    }

    render() {
        const { contact, back } = this.state
        return (

            <div className="edit-add-container">
                <div className="inner-edit-nav">
                    <Link to={back}><img className="back" src={backImg} alt="back" /></Link>
                    {contact._id ?
                        (<img onClick={this.handleDelete.bind(this)}
                            className="remove" src={remove} alt="delete" />)
                        : (<div></div>)}
                </div>
                <img className="robot-edit-add" src={`https://robohash.org/${contact.name}.png`} alt="contactImg"></img>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        NAME:
                           <input type="text"
                            required
                            value={contact.name}
                            onChange={this.handleChangeArrow('name')}
                            placeholder="name"
                        />
                    </label>
                    <label>
                        PHONE:
                           <input type="text"
                            required
                            value={contact.phone}
                            onChange={this.handleChange.bind(this, 'phone')}
                            placeholder="phone"
                        />
                    </label>
                    <label>
                        EMAIL:
                           <input type="email"
                            required
                            value={contact.email}
                            onChange={this.handleChange.bind(this, 'email')}
                            placeholder="email"
                        />
                    </label>

                    <button className="submit-btn" type="submit"> Submit  </button>

                </form>

            </div>

        )
    }

}

export default ContactEditPage