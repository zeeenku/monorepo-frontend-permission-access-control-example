import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function LessonFormCreate(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>lesson</strong></p>
      <p>🛠️ Action: <strong>create</strong></p>

      <Can I="create" a="lesson" fallback={<p>🚫 You do not have permission to create lessons.</p>}>
        <form>✏️ Create a new lesson form...</form>
      </Can>
    </div>
  );
}
