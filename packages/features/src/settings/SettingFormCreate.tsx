import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function SettingFormCreate(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>setting</strong></p>
      <p>🛠️ Action: <strong>create</strong></p>

      <Can I="create" a="setting" fallback={<p>🚫 You do not have permission to create settings.</p>}>
        <form>⚙️ Create new setting form...</form>
      </Can>
    </div>
  );
}
