import { useEffect, useState } from "react";
import IIUMlogo from "../../assets/images/IIUM-logo.png";
import { navigationLinks } from "../../data/data";
import "./Sidebar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { NavLink } from "react-router-dom";

import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);


  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="arms-logo">
        <div className="arms-img img-fit-cover">
          <img src={IIUMlogo} alt="profile image" />
        </div>
        <span className="arms-name">ARMS</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <NavLink
                to={navigationLink.link}
                activeClassName="active"
                className="nav-link"
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
 
      <button onClick={logoutHandler}>LOGOUT</button>
    </div>
  );
};

export default Sidebar;
