import { useRole, Can } from "~/packages/acl/src";

export function Header() {
  return (
    <Can I="read" a="dashboard" fallback={null}>
      <p className="mb-8 max-w-4xl mx-auto">
        🔐 Your role is: <strong>{useRole()}</strong>
      </p> 
    </Can>
  );
}
