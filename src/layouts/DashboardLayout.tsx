// layouts/DashboardLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="dashboard-grid">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
