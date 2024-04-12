import "./App.css";

import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import TopBar from "./components/TopBar/TopBar";

import Sidebar from "./layout/Sidebar/Sidebar";
function App() {
  return (
    <>
      <></>
      <div className="app">
        <ToastContainer />
        <Sidebar />
        <div className="main-content texture">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
