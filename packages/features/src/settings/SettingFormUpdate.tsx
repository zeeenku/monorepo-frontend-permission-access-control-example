import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function SettingFormUpdate(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>setting</strong></p>
      <p>🛠️ Action: <strong>update</strong></p>

      <Can I="update" a="setting" fallback={<p>🚫 You do not have permission to update settings.</p>}>
        <form>🛠️ Update setting form...</form>
      </Can>
    </div>
  );
}
