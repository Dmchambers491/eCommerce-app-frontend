import React, { Component } from 'react';
import { useFetch } from '../service/UserService';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };

        this.changeClicked = this.changeClicked.bind(this);
        this.userTable = this.userTable.bind(this);
        // this.displayUsers = this.displayUsers.bind(this);
    }

    changeClicked() {
        const click = this.state.clicked;
        this.setState({
          clicked: !click
        });
    }

    // displayUsers(){
    //     const {loading, data} = useFetch('getAll', null);
    //     return(
    //         <div>
    //             {loading && <p>loading...</p>}
    //             {data && data.length > 0 && data.map(user => 
    //                  <tr>
    //                  <th scope="row">{user.id}</th>
    //                  <td>{user.email}</td>
    //                  <td><button className="btn btn-primary" onClick="">Delete User</button></td>
    //                  </tr>
    //             )}
    //         </div>
    //     )
    // }

    userTable(){
        if(this.state.clicked === false){
            return <button className="btn btn-primary" onClick={this.changeClicked}>Show User</button>
        }else if(this.state.clicked === true){
            return <div>
                    <button className="btn btn-primary" onClick={this.changeClicked}>Hide User</button>
                    <button className="btn btn-primary" onClick="">Add New User</button> 
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
                        </tr>
                    </tbody>
                    </table>
                </div>
        }
    }

    render() {
        return (
            <div>
                <h5>This is Admin's Page</h5>
                <div className="container">
                    {this.userTable()}
                </div>
            </div>
        );
    }
}

export default Admin;