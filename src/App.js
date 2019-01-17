import React, { Component } from 'react';
import '../src/assets/App.css'
import Navbar from './components/Navbar'
import ContactPage from './pages/ContactPage/ContactsPage'
import HomePage from './pages/HomePage/HomePage'
import StaticPage from './pages/StaticPage/StaticPage'
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage'
import ContactEditPage from './pages/ContactEditPage/ContactEditPage'
import SignupPage from './pages/SignupPage/SignupPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
