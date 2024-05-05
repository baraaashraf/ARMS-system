import React from "react";
import { BITphase4_1 } from "../../data/data";
import { Link } from "react-router-dom";

import "./BITphase.css";
const Phase4 = () => {
  return (
    <div>
      <h1>Curriculum Review Process Flow(Appendix C)</h1>
      <h2>Flowchart of Scopes</h2>
      <div className="phases-container">
        {BITphase4_1.map((phase, index) => (
          <>
            <div className="stage">
              <Link key={index} to={`s${index + 1}`}>
                <p>{phase.title}</p>
              </Link>
            </div>
            <div className="line" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Phase4;
