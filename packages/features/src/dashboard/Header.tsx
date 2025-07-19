import { useRole, Can } from "~/packages/acl/src";

export function Header() {
  return (
    <Can I="read" a="dashboard" fallback={null}>
      <p>
        🔐 Your role is: <strong>{useRole()}</strong>
      </p>
    </Can>
  );
}
