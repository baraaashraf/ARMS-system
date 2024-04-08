import "./TopBar.css";
import IIUMlogo from "../../assets/images/person_one.jpg";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { useLocation } from 'react-router-dom';
import menuIcon from '../../assets/icons/menu.svg'
const TopBar = () => {
  const route = useLocation()
  const { pathname } = route;
  const location = pathname.split('/').slice(-1).toString().toUpperCase()
  console.log(location)
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={menuIcon} alt="" />
        </button>
        <h3 className="content-top-title">{location}</h3>
      </div>
      <div className="user-logo">
        <span className="user-name">USER</span>
        <div className="user-img img-fit-cover">
          <a href="/account">
            <img src={IIUMlogo} alt="profile image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
