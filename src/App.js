import React, { Component } from 'react';
import MyNavBar from "./Components/MyNavBar"
import PageContent from "./Components/PageContent"
import './App.css';
import LoggedInNav from './Components/LoggedInNav';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    };
    // bind so you know you are calling the function that is in here.
    this.changePage = this.changePage.bind(this);
    this.setLogin = this.setLogin.bind(this);
    this.setActiveNav = this.setActiveNav.bind(this);
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    });
    console.log(newPage);
  }

  setLogin(email) {
    this.setState({
      loggedIn: email
    });
  }

  setActiveNav(){
    if(this.state.loggedIn){
      return <LoggedInNav changePage = {this.changePage}/>
    }else {
      return <MyNavBar changePage = {this.changePage}/>
    }
  }

render() {
  const webpage = this.state.page;
  return (
    <div>
      {this.setActiveNav()}
      <div className="container">
        <PageContent page = {webpage} changePage = {this.changePage} setLogin = {this.setLogin}/>
      </div>
    </div>
  );
}
}

export default App;