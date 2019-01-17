import React, { Component } from 'react'
import UserService from '../../services/UserService';
import bitcoin from '../../assets/img/bitcoin.jpg'
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import './SignupPage.css'

@inject('store')
@observer
class Signup extends Component {
    userStore = this.props.store.userStore

    @observable
    userName = ''

    handleChange(e) {
        this.userName = e.target.value;
    }

    handleSignup(e) {//check here......
        e.preventDefault();
        this.userStore.fetchSignUp(this.userName)
        this.userStore.fetchUser()
        this.props.history.push('/')
    }

    render() {
        return (
            <label className="sign-up-container">
                <img src={bitcoin} alt="bitcoin" />
                Please Enter Your Name:
                <input className="sign-up-input" type="text" placeholder="Enter your name"
                    value={this.userName} onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleSignup.bind(this)}>Sign up</button>
            </label>
        )
    }

}

export default Signup