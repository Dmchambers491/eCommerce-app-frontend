import React, { Component } from 'react';
import Home from './Home';
import Register from './Register';
import Contact from './Contact';
import Login from './Login';
import User from './User';
import Logout from './Logout';
import Admin from './Admin';


class PageContent extends Component {

  changePage(page) {
    switch (page) {
      case 'home':
        return <Home />;
      case 'register':
        return <Register />;
      case 'contact':
        return <Contact />;
      case 'user':
        return <User />;
      case 'admin':
        return <Admin />;
      case 'logout':
        return <Logout />;
      case 'login':
        return <Login changePage = {this.props.changePage} setLogin = {this.props.setLogin}/>;
      default:
        return <Home />;
    }
  }

  render() {
    const myPage = this.changePage(this.props.page);
    return myPage;
  }
}

export default PageContent;