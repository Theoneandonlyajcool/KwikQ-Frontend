// layouts/AuthLayout.tsx
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-container">
      {/* No header/footer for auth */}
      <Outlet />
    </div>
  );
}
