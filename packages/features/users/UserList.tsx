import React from "react";
import { can } from "@myorg/acl";
import { useRole } from "@myorg/acl/react";

export default function UserList() {
  const role = useRole();
  if (!can(role, "users", "read")) return <p>🚫 Access Denied</p>;

  return (
    <div>
      <h2>Users List</h2>
      {/* Render users table here */}
    </div>
  );
}
