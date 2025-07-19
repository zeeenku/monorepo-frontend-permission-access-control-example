import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function LessonFormUpdate(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>lesson</strong></p>
      <p>🛠️ Action: <strong>update</strong></p>

      <Can I="update" a="lesson" fallback={<p>🚫 You do not have permission to update lessons.</p>}>
        <form>🛠️ Edit lesson form...</form>
      </Can>
    </div>
  );
}
