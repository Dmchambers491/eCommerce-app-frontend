import React, { useState } from "react";
import "../App.css";
import { validateUser } from '../service/UserService';

// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = React.useState(
//       localStorage.getItem(localStorageKey) || {}
//   );

//   React.useEffect(() => {
//       localStorage.setItem(localStorageKey, value);
//   }, [value]);

//   return [value, setValue];
// };

const Login = (props) => {
//   const [data, setData] = useStateWithLocalStorage("currentUser");
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
              // setData(user.data);
              console.log(user.data);
              alert('Login Successful!!');
              //change page here/check role of user
              if(user.data.role == "USER"){
                  console.log("User");
                  props.changePage('/home');
                  props.setLogin(user.data.email);
              }else if(user.data.role == "ADMIN"){
                  console.log("Admin");
                  props.changePage('/home');
                  props.setLogin(user.data.email);
              }
          });
      } catch (error) {
          alert('Login Unsuccessful!!');
          throw error;
      }
  }

  return (
    <>
      <div>
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