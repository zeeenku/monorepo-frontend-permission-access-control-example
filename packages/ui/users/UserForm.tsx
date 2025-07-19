import React from "react";
import { can } from "@myorg/acl";
import { useRole } from "@myorg/acl/react";

export default function UserForm() {
  const role = useRole();
  if (!can(role, "users", "create")) return <p>🚫 No permission to create users.</p>;

  return (
    <form>
      <h2>Create or Edit User</h2>
      {/* Form fields here */}
      <button type="submit">Save User</button>
    </form>
  );
}
