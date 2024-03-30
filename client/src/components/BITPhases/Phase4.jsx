import React from "react";
import { BITphase4 } from "../../data/data";
import { Link } from "react-router-dom";

import "./BITphase.css";
const Phase4 = () => {
  return (
    <div>
      <h1>Curriculum Review Process Flow(Appendix C)</h1>
      <h2>Flowchart of Scopes</h2>
      <div className="phases-container">
        {BITphase4.map((phase, index) => (
          <>
            <div key={index} className="stage">
              <Link to={`s${index}`}>
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
