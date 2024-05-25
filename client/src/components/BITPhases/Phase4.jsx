import React from "react";
import { BITphase4_1 } from "../../data/data";
import { Link } from "react-router-dom";
import PercentageLine from "../Percentage-Line/PercentageLine";
import "./BITphase.css";
const Phase4 = () => {
  return (
    <div>
      <h1>Curriculum Review Process Flow</h1>
      <div className="phases-container">
        {BITphase4_1.map((phase, index) => (
          <React.Fragment key={index}>
            <div className="stage">
              <Link className="phase-span" to={`s${index + 1}`}>
                <span>
                  <p> {phase.title}</p>
                  <PercentageLine percentage={phase.percentage} />
                </span>
              </Link>
            </div>
            <div className="line" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Phase4;
