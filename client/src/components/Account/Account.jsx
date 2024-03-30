import React from "react";
import personOne from "../../assets/images/person_one.jpg";
import "./Account.css";
const Account = () => {
  return (
    <div>
      <h1>Profile</h1>
      <div className="profile-info-container">
        <img className="profile-img" src={personOne} alt="" />
        <ul>
          <li>user name</li>
          <li>user role</li>
        </ul>
      </div>
      <h1>Personal Info</h1>
      <div className="personal-info-container">
        <form className="personal-info-form" action="" method="PUT">
          <div class="form-group">
            <label htmlFor="">Name:</label>
            <input type="text" />
          </div>

          <div class="form-group">
            <label htmlFor="">Country:</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label htmlFor="">Marital Status:</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label htmlFor="">Identity Card/ Passport No:</label>
            <input type="text" />
          </div>

          <div class="form-group">
            <label htmlFor="">Gender:</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label htmlFor="">Address:</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label htmlFor="">Birthday:</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label htmlFor="">Email:</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label htmlFor="">Religion:</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label htmlFor="">Mobile:</label>
            <input type="text" />
          </div>

          <input type="submit" className="submit-button"/>
        </form>
      </div>
    </div>
  );
};

export default Account;
