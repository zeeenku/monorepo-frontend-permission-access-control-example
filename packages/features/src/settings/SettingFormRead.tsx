import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function SettingFormRead(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>setting</strong></p>
      <p>🛠️ Action: <strong>read</strong></p>

      <Can I="read" a="setting" fallback={<p>🚫 You do not have permission to view settings.</p>}>
        <div>🔧 Settings dashboard or list goes here...</div>
      </Can>
    </div>
  );
}
