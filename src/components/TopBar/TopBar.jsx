import { iconsImgs } from "../../utils/images";
import "./TopBar.css";
import IIUMlogo from "../../assets/images/person_one.jpg";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const TopBar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} alt="" />
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>
      {/* <div className="content-top-btns">
        <button type="button" className="search-btn content-top-btn">
          <img src={iconsImgs.search} alt="" />
        </button>
        <button className="notification-btn content-top-btn">
          <img src={iconsImgs.bell} />
          <span className="notification-btn-dot"></span>
        </button>
      </div> */}
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
