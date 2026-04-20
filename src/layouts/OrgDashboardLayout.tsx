// layouts/OrgDashboardLayout.tsx
import { Outlet } from "react-router-dom";
import OrgSidebar from "@/components/layout/OrgSidebar";
export default function OrgDashboardLayout() {
  return (
    <div className="dashboard-grid">
      <OrgSidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
