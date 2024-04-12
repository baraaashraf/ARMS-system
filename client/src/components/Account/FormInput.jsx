import React from "react";

const FormInput = ({ label, value, onEdit }) => {
  return (
    <div class="form-group">
      <label htmlFor="">{label}</label>
      <input type="text" value={value} onChange={onEdit}/>
    </div>
  );
};

export default FormInput;
