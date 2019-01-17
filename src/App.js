import React, { Component } from 'react'
import './assets/App.css'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { observer, inject } from 'mobx-react';

import Navbar from './components/Navbar'
import ContactPage from './pages/ContactPage/ContactsPage'
import HomePage from './pages/HomePage/HomePage'
import StaticPage from './pages/StaticPage/StaticPage'
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage'
import ContactEditPage from './pages/ContactEditPage/ContactEditPage'
import SignupPage from './pages/SignupPage/SignupPage'
// switch means that "i want to match only one path, the first you find, link to it"

const PrivateRoute = props => {
  return props.isLoggedIn ? <Route {...props} /> : <Redirect to="/signup" />;
};

@inject('store')
@observer
class App extends Component {

  render() {
    const { user } = this.props.store.userStore
    return (
      <Router>
        <div>
          {user && <Navbar />} 
          {/* <Switch> */}
            <PrivateRoute isLoggedIn={!!user} path="/" exact component={HomePage} />
            <PrivateRoute isLoggedIn={!!user} path="/contact/edit/:id" exact component={ContactEditPage} />
            <PrivateRoute isLoggedIn={!!user} path="/contact/addContact" exact component={ContactEditPage} />
            <PrivateRoute isLoggedIn={!!user} path="/contact/:id" exact component={ContactDetailsPage} />
            <PrivateRoute isLoggedIn={!!user} path="/contacts" exact component={ContactPage} />
            <PrivateRoute isLoggedIn={!!user} path="/statics" exact component={StaticPage} />
            <Route path="/signup" render={(props) => <SignupPage {...props} />} />
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;

   /* <Route exact path='/' render={() => (
            (!this.state.loggedIn) ? (<Redirect exact to="/signup" />) : (<HomePage />))} /> */


            /* <PrivateRoute /> */