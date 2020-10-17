import React, { Component } from 'react';
import Home from './Home';


class PageContent extends Component {

  changePage(page) {
    switch (page) {
      case 'home':
        return <Home />;
      case 'login':
        return ;
      case 'restaurant':
        return ;
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