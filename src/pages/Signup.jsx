import React from "react";
import "../register.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="register-background">
      <div className="form-container">
        <div className="registration form">
          <header>Signup</header>
          <form className="register-form" action="#">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <input type="button" className="button" value="Signup" />
          </form>
          <div className="register-other">
            <span className="register-other">
              Already have an account? 
              <label htmlFor="check"> 
                 <Link to="/login"> Login</Link>
              </label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
