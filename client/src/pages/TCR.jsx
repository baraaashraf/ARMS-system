import React from "react";
import "../layout/TCR.css";

const TCR = () => {
  return (
    <>
      <h1>Template Curriculum Review</h1>
      <div className="program-container">
        <div>
          <h5 className="tcr-title">Upload file</h5>
          <button className="tcr-button">Upload</button>
        </div>

        <div>
          <h5 className="tcr-title">Download file</h5>
          <button className="tcr-button">Download</button>
        </div>
      </div>
    </>
  );
};

export default TCR;
