import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function ProgressReportView(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>progress-report</strong></p>
      <p>🛠️ Action: <strong>read</strong></p>

      <Can I="read" a="progress-report" fallback={<p>🚫 You do not have permission to view progress reports.</p>}>
        <div>📈 Viewing progress report data...</div>
      </Can>
    </div>
  );
}
