import "./Timeline.css";
import { TimelineData } from "../../data/data";
import { iconsImgs } from "../../utils/images";

const Timeline = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c7">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Timeline</h3>
        <button className="grid-c-title-icon">
        </button>
      </div>
      <div className="grid-c3-content">
        <ul className="data-list">
          {TimelineData.map((item, index) => (
            <div className="data-list-item" key={index}>
              <h3>{item.Date}</h3>
              <li>
                <span>
                  <img src={iconsImgs.rightArrow} width={15} />
                </span>
                {item.Title}
              </li>
              <p>{item.Desc}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
