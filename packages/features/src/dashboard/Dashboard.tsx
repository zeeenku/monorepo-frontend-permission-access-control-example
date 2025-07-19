import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function Dashboard() {
  const role = useRole();

  return (
    <div>
      <Can
        I="read"
        a="dashboard"
        fallback={<p>🚫 No access to dashboard.</p>}
      >
        <Header />
        <h1>Dashboard</h1>
        {/* Dashboard widgets */}
      </Can>
    </div>
  );
}
