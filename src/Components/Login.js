import React from "react";
import "../App.css";

function Login() {
  return (
    <>
      <div>
        <h1>Login Form</h1>
        <form>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="submit" className="btn btn-danger">Cancel</button>
        </form>
      </div>
    </>
  );
}

export default Login;