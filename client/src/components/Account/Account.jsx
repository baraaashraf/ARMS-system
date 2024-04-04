import React from "react";
import personOne from "../../assets/images/person_one.jpg";
import "./Account.css";
import FormInput from "./FormInput";
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
          <FormInput label="Name" />
          <FormInput label="Country" />
          <FormInput label="Marital Status" />
          <FormInput label="Identity Card/ Passport No" />
          <FormInput label="Gender" />
          <FormInput label="Address" />
          <FormInput label="Birthday" />
          <FormInput label="Email" />
          <FormInput label="Religion" />
          <FormInput label="Mobile" />
          <input type="submit" id="submit-button" value='Update Info' />
        </form>
      </div>
    </div>
  );
};

export default Account;
