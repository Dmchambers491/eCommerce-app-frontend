import React, { Component } from 'react';
import MyNavBar from "./Components/MyNavBar"
import PageContent from "./Components/PageContent"
import './App.css';
import UserNav from './Components/UserNav';
import AdminNav from './Components/AdminNav';

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
  }

  setLogin(email, role) {
    this.setState({
      loggedIn: email,
      role: role
    });
  }

  setActiveNav(){
    if(this.state.loggedIn && this.state.role === "USER"){
      return <UserNav changePage = {this.changePage}/>
    }else if(this.state.loggedIn && this.state.role === "ADMIN"){
      return <AdminNav changePage = {this.changePage}/>
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