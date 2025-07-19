import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function LessonFormDelete(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>lesson</strong></p>
      <p>🛠️ Action: <strong>delete</strong></p>

      <Can I="delete" a="lesson" fallback={<p>🚫 You do not have permission to delete lessons.</p>}>
        <button className="text-red-500">🗑️ Delete this lesson</button>
      </Can>
    </div>
  );
}
