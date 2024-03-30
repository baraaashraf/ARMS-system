import { iconsImgs } from "../../utils/images";
import "./Timeline.css";
import { TimelineData } from "../../data/data";
import React from "react";

const Timeline = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c7">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Timeline</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c3-content">
        <ul className="data-list">
          {TimelineData.map((item, index) => (
            <React.Fragment key={index}>
              <h3>{item.Date}</h3>
              <li>{item.Title}</li>
              <p>{item.Desc}</p>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
