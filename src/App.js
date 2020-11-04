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

  setLogin(email, role, id) {
    this.setState({
      loggedIn: email,
      role: role,
      id: id
    });
  }

  setActiveNav(){
    if(this.state.loggedIn && this.state.role === "USER"){
      return <UserNav changePage = {this.changePage} email = {this.state.loggedIn}/>
    }else if(this.state.loggedIn && this.state.role === "ADMIN"){
      return <AdminNav changePage = {this.changePage} email = {this.state.loggedIn}/>
    }else {
      return <MyNavBar changePage = {this.changePage}/>
    }
  }

render() {
  const webpage = this.state.page;
  return (
    <div>
      {this.setActiveNav()}
      <div>
        <PageContent page = {webpage} changePage = {this.changePage} setLogin = {this.setLogin} email = {this.state.loggedIn} role = {this.state.role} id = {this.state.id}/>
      </div>
    </div>
  );
}
}

export default App;