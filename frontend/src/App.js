import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/login";
import PageNotFound from "./components/pages/PageNotFound";
import PrivateRoute from "./components/auth/PrivateRoute";
import DashboardLayout from "./components/pages/dashboard/DashboardLayout";

// Optional dummy components for testing
import Home from "./components/pages/PageLayout/Home";
import Instructions from "./components/pages/PageLayout/Instructions";

import BruteForcePage from "./components/pages/PageLayout/BruteForce";
import CommandInjectionPage from "./components/pages/PageLayout/commandInjection";
import FileUploadPage from "./components/pages/PageLayout/fileUpload";
import SQLInjectionPage from "./components/pages/PageLayout/sqlInjection";
import XssDomPage from "./components/pages/PageLayout/Xss_Dom";
import XssReflectedPage from "./components/pages/PageLayout/xss_Reflected";
import XssStoredPage from "./components/pages/PageLayout/xss_store";
import CspBypassPage from "./components/pages/PageLayout/csp_bypass";

import AboutPage from "./components/pages/PageLayout/About";
import BeeSecurity from './components/pages/PageLayout/Bee_Security';

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
        {/* Default route under /dashboard redirects to xss */}
        <Route index element={<Navigate to="home" />} />

        
        {/* Dashboard child pages (add more here) */}
        {/* Top */}
        <Route path="home" element={<Home />} />
        <Route path="instructions" element={<Instructions />} />

        {/* Mid */}
        <Route path="brute-force" element={<BruteForcePage />} />
        <Route path="command-injection" element={<CommandInjectionPage />} />
        <Route path="file-upload" element={<FileUploadPage />} />
        <Route path="sql" element={<SQLInjectionPage />} />
        <Route path="xss-dom" element={<XssDomPage />} />
        <Route path="xss-reflected" element={<XssReflectedPage />} />
        <Route path="xss-stored" element={<XssStoredPage />} />
        <Route path="csp-bypass" element={<CspBypassPage />} />

        {/* Low  */}
        <Route path="about" element={<AboutPage />} />
        <Route path="bee-security" element={<BeeSecurity />} />


        <Route path="*" element={<PageNotFound />} />

      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
