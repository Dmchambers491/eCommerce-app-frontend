import React, { Component } from 'react';
import MyNavBar from "./Components/MyNavBar"
import PageContent from "./Components/PageContent"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    };
    // bind so you know you are calling the function that is in here.
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    });
  }
  
render() {
  const webpage = this.state.page;
  return (
    <div>
      <MyNavBar changePage = {this.changePage}/>
      <div className="container">
        <PageContent page = {webpage}/>
      </div>
    </div>
  );
}
}

export default App;
