import React from "react";

const FormInput = ({ label }) => {
  return (
    <div class="form-group">
      <label htmlFor="">{label}</label>
      <input type="text" />
    </div>
  );
};

export default FormInput;
