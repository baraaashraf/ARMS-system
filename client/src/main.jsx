import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SidebarProvider } from "./context/sidebarContext.jsx";

import store from "./store.js";
import { Provider } from "react-redux";

// Modules
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from "react-router-dom";

// Components

import Main from "./components/Main/Main";

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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<App />}>
        <Route path="" element={<PrivateRoute />}>
          <Route path="home" element={<Main />} />
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
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  </Provider>
);
