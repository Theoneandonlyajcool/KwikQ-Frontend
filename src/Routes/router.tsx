// src/router.tsx
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import OrgDashboardLayout from "@/layouts/OrgDashboardLayout";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/SignupPage";
import NotFoundPage from "@/pages/errors/NotFound";

// Organization Dashboard Pages
import OrgOverview from "@/features/organisationDashboard/pages/OrgOverview";
import OrgSettings from "@/features/organisationDashboard/pages/OrgSettings";

// Individual Dashboard Pages
import Overview from "@/features/Single_InidividualDashboard/pages/Overview";
import Settings from "@/features/Single_InidividualDashboard/pages/Settings";
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Overview /> },
      { path: "/dashboard/settings", element: <Settings /> },
    ],
  },

  {
    element: <OrgDashboardLayout />,
    children: [
      { path: "/org-dashboard", element: <OrgOverview /> },
      { path: "/org-dashboard/settings", element: <OrgSettings /> },
    ],
  },

  // Fallback route (404)
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
