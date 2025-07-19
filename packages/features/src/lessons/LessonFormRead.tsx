import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function LessonFormRead(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>lesson</strong></p>
      <p>🛠️ Action: <strong>read</strong></p>

      <Can I="read" a="lesson" fallback={<p>🚫 You do not have permission to view lessons.</p>}>
        <div>📚 Lessons list goes here...</div>
      </Can>
    </div>
  );
}
