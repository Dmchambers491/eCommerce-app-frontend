import React, { Component } from 'react';

class UserNav extends Component {
    constructor(props) {
        super(props);
        this.handleNavClick = this.handleNavClick.bind(this);
      }
    
      handleNavClick(event, newPage) {
        this.props.changePage(newPage);
        // prevent reload of page caused by clicking links
        event.preventDefault();
      }
    
      render() {
        return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#"> <h4 onClick={(event) => this.handleNavClick(event, 'home')}>The Beginner Pvt Ltd</h4></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a href="#" className="nav-link" onClick={(event) => this.handleNavClick(event, 'home')}>Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active">
                    <a href="#" className="nav-link" onClick={(event) => this.handleNavClick(event, 'contact')}>Contact</a>
                  </li>
                  <li className="nav-item active">
                    <a href="#" className="nav-link" onClick={(event) => this.handleNavClick(event, 'user')}>User</a>
                  </li>
                  <li className="nav-item active">
                    <a href="#" className="nav-link" onClick={(event) => this.handleNavClick(event, 'logout')}>Logout</a>
                  </li>
                </ul>
                <h6 className="">Welcome {this.props.email}!</h6>
              </div>
            </nav>
          </div>
        );
      }
}

export default UserNav;