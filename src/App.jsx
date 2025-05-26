import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { DashboardLayout } from "./pages/Dashboard/DashboardLayout";
import { DashboardOverview } from "./pages/Dashboard/DashboardOverview";
import { UsersPage } from "./pages/Dashboard/UsersPage";
import { LabPage } from "./pages/Dashboard/LabPage";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Dashboard */}

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
      <Route index element={<DashboardOverview />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="lab" element={<LabPage />} />
      </Route >

    </Routes>
  );
}

export default App;
