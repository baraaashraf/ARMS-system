import React from "react";
import { BITphases } from "../data/data";
import {Link} from "react-router-dom"
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
              <Link to={phase.link}>{phase.phaseTitle}</Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BIT;
