import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export function Header() {
  // Only render if user can read dashboard
  return (
    <Can I="read" a="dashboard" fallback={null}>
      <p>
        🔐 Your role is: <strong>{useRole()}</strong>
      </p>
    </Can>
  );
}
