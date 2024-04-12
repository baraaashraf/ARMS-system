import { DashboardInfo } from "../../data/data";

const DashboardLine = ({}) => {
  return (
    <>
      {DashboardInfo.map((item, index) => (
        <div className="data-list-item" key={index}>
          <h3>{item.Title}</h3>
        </div>
      ))}
    </>
  );
};

export default DashboardLine;
