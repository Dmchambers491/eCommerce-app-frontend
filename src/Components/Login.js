import React, { useState } from "react";
import "../App.css";
import { validateUser } from '../service/UserService';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = event => {
      switch (event.target.name) {
          case "email": setEmail(event.target.value);
              break;
          case "password": setPassword(event.target.value);
              break;
      }
  }

  const handleSubmit = async event => {
      event.preventDefault();
      try {
          await validateUser(email, password).then(user => {
              console.log(user.data);
              alert('Login Successful!!');
              props.changePage('/home');
              props.setLogin(user.data.email, user.data.role, user.data.id);
          });
      } catch (error) {
          alert('Login Unsuccessful!!');
          throw error;
      }
  }

  return (
    <>
      <div className="container">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" name="email" className="form-control" value={email} placeholder="Email" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" name="password" className="form-control" value={password} placeholder="Password" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="submit" className="btn btn-danger">Cancel</button>
        </form>
      </div>
    </>
  );
}

export default Login;