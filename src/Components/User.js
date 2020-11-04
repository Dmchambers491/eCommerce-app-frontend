import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };

        this.changeClicked = this.changeClicked.bind(this);
        this.userTable = this.userTable.bind(this);
    }

    changeClicked() {
        const click = this.state.clicked;
        this.setState({
          clicked: !click
        });
    }

    userTable(){
        if(this.state.clicked === false){
            return <button className="btn btn-primary" onClick={this.changeClicked}>Show User Details</button>
        }else if(this.state.clicked === true){
            return <div>
                    <button className="btn btn-primary" onClick={this.changeClicked}>Hide User Details</button> 
                    <p>User Data</p>
                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">{this.props.id}</th>
                        <td>{this.props.email}</td>
                        <td><button className="btn btn-primary" onClick="">Delete User</button></td>
                        <td><button className="btn btn-primary" onClick="">Update User</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
        }
    }

    render() {
        return (
            <div>
                <h5>Hi {this.props.email} !!!</h5>
                <div className="container">
                    {this.userTable()}
                </div>
            </div>
        );
    }
}

export default User;