import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import About_us_page from "./pages/About_us_page";
import TopBar from "./components/TopBar/TopBar";
import TCR from "./pages/TCR";
import AcademicProgram from "./pages/AcademicProgram";
import Account from "./pages/Account";
function App() {
  return (
    <>
      <div className="app">
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
      </div>
    </>
  );
}

export default App;
