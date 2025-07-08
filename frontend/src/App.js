import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/login";
import PageNotFound from "./components/pages/PageNotFound";
import PrivateRoute from "./components/auth/PrivateRoute";
import DashboardLayout from "./components/pages/dashboard/DashboardLayout";

// Optional dummy components for testing
// import XSSPage from "./components/pages/XSSPage";
// import CSRFPage from "./components/pages/CSRFPage";

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />


      {/* Protected Dashboard Layout */}
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        {/* Dashboard child pages (add more here) */}
        {/* <Route path="xss" element={<XSSPage />} />
        <Route path="csrf" element={<CSRFPage />} /> */}
        {/* Default route under /dashboard redirects to xss */}
        <Route index element={<Navigate to="xss" />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
