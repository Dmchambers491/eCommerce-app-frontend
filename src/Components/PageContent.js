import React, { Component } from 'react';
import Home from './Home';
import Register from './Register';
import Contact from './Contact';
import Login from './Login';


class PageContent extends Component {

  changePage(page) {
    switch (page) {
      case 'home':
        return <Home />;
      case 'register':
        return <Register />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login />;
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