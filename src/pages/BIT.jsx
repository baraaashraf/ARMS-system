import React from "react";
import { BITphases } from "../data/data";
import "../layout/BIT.css";
const BIT = () => {
  return (
    <>
      <h1>BIT</h1>
      <div className="phases-container">
        {BITphases.map((phase, index) => (
          <div key={index} className="phase">
            <h2>{phase.phaseName}</h2>
            <p>
              <a href={phase.link}>{phase.phaseTitle}</a>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BIT;
