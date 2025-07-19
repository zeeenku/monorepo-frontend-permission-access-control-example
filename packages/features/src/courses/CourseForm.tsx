import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function CourseForm(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>
        🔐 You are a: <strong>{role}</strong>
      </p>
      <p>
        📦 Resource: <strong>courses</strong>
      </p>
      <p>
        🛠️ Action: <strong>create</strong>
      </p>

      <Can I="create" a="courses" fallback={<p>🚫 Sorry, you do not have permission to create courses.</p>}>
        <form>✏️ You have access! Create or edit course...</form>
      </Can>
    </div>
  );
}
