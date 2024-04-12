import "./Dashboard.css";
import DashboardLine from "../DashboardLine/DashboardLine";

const Dashboard = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Dashboard</h3>
      </div>
      <DashboardLine />
    </div>
  );
};

export default Dashboard;
