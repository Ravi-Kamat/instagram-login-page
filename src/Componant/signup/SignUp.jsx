import "./Signup.css";

import { useState } from "react";

function Signup() {
  const [login, setLogin] = useState(true);

  const loginSwitch = () => {
    setLogin(!login);
  };

  return (
    <>
      <div className="main-div">
        <h1>Instagram</h1>
        <input
          hidden={login}
          type="text"
          name="userId"
          placeholder="Mobile number or Email"
        />

        <input
          hidden={login}
          type="text"
          name="fullName"
          placeholder="Full Name"
        />

        <input
          type="text"
          name="userName"
          placeholder="Phone number, username or email"
        />

        <input type="password" name="password" placeholder="Password" />

        <button id="signup">{login ? "Sign in" : "Sign up"}</button>
        <div>
          <p>
            {login ? "Don't have Account" : "have an account"} {""}
            <span href="" onClick={loginSwitch}>
              {login ? "Sign up" : "Log in"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
export default Signup;
