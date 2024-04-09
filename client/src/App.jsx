import "./App.css";
// Modules
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import Sidebar from "./layout/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import TopBar from "./components/TopBar/TopBar";

import Phase1 from "./components/BITPhases/Phase1";
import Phase2 from "./components/BITPhases/Phase2";
import Phase3 from "./components/BITPhases/Phase3";
import Phase4 from "./components/BITPhases/Phase4";
import Phase5 from "./components/BITPhases/Phase5";

// Pages
import About_us_page from "./pages/About_us_page";
import TCR from "./pages/TCR";
import AcademicProgram from "./pages/AcademicProgram";
import AccountPage from "./pages/AccountPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BIT from "./pages/BIT";
import BCS from "./pages/BCS";

function App() {
  return (
    <>
      <div className="app">
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/*"
            element={
              <>
                <Sidebar />
                <div className="main-content texture">
                  <TopBar />

                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/academic_program">
                      <Route index element={<AcademicProgram />} />
                      <Route path="bcs" element={<BCS />} />
                      <Route path="bit">
                        <Route index element={<BIT />} />
                        <Route path="phase1" element={<Phase1 />} />
                        <Route path="phase2" element={<Phase2 />} />
                        <Route path="phase3" element={<Phase3 />} />
                        <Route path="phase4" element={<Phase4 />} />
                        <Route path="phase5" element={<Phase5 />} />
                      </Route>
                    </Route>
                    <Route path="/TCR" element={<TCR />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/about_us" element={<About_us_page />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
