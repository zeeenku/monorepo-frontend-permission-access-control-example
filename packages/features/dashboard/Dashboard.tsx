import React from "react";
import { can } from "@myorg/acl";
import { useRole } from "@myorg/acl/react";

export default function Dashboard() {
  const role = useRole();
  if (!can(role, "dashboard", "read")) return <p>🚫 No access to dashboard.</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Dashboard widgets */}
    </div>
  );
}
