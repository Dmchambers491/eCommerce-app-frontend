import React from "react";
import "../App.css";

function Register() {
  return (
    <>
      <div>
        <h1>Register Yourself</h1>
        <form action="/action_page.php">
            <div className="form-group">
                <label for="email">Email address:</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd"/>
            </div>
            <div className="form-group">
                <label for="repwd">RePassword:</label>
                <input type="password" className="form-control" id="repwd"/>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            <button type="submit" className="btn btn-danger">Cancel</button>
        </form>
      </div>
    </>
  );
}

export default Register;