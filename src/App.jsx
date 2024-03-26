import "./App.css";
// Modules
import { Route, Routes } from "react-router-dom";

// Components
import Sidebar from "./layout/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import TopBar from "./components/TopBar/TopBar";

// Pages
import About_us_page from "./pages/About_us_page";
import TCR from "./pages/TCR";
import AcademicProgram from "./pages/AcademicProgram";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <>
      <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/*"
          element={
            <>
              <Sidebar />
              <div className="main-content">
                <TopBar />
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/academic_program" element={<AcademicProgram />} />
                  <Route path="/TCR" element={<TCR />} />
                  <Route path="/account" element={<Account />} />
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
