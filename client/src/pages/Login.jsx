import React from "react";
import "../register.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="register-background">
      <div className="form-container">
        <div className="login form">
          <header>Login</header>
          <form className="register-form" action="#">
            <input type="text" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <a href="#">Forgot password?</a>
            <input type="button" className="button" value="Login" />
          </form>
          <div className="register-other">
            <span className="register-other">
              Don't have an account?
              <label htmlFor="check"> <Link to="/signup">Signup</Link></label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
