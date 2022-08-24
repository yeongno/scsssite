import React from "react";
import "../../styles/Login.scss";

function Login() {
  return (
    <div className="forms">
      <form action="" className="form">
        <label htmlFor="">email</label>
        <input type="text" name="" id="" placeholder="email" />
        <label htmlFor="">password</label>
        <input type="password" placeholder="password" />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Login;
