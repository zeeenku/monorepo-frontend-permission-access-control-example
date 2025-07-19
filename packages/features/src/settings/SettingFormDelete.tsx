import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function SettingFormDelete(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>setting</strong></p>
      <p>🛠️ Action: <strong>delete</strong></p>

      <Can I="delete" a="setting" fallback={<p>🚫 You do not have permission to delete settings.</p>}>
        <button className="text-red-500">🗑️ Delete this setting</button>
      </Can>
    </div>
  );
}
