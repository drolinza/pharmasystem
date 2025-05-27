import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./features/landing/pages/LandingPage";
import { Signup } from "./features/auth/pages/Signup";
import { Login } from "./features/auth/pages/Login";
import { PrivateRoute } from "./router/PrivateRoute";
import { DashboardLayout } from "./features/dashboard/DashboardLayout";
import { DashboardOverview } from "./features/dashboard/components/DashboardOverview";
import { UsersPage } from "./features/users/pages/UsersPage";
import { ManageDrugs } from "./features/dashboard/ManageDrugs";

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
        <Route path="managedrugs" element={<ManageDrugs />} />
      </Route>
    </Routes>
  );
}

export default App;
