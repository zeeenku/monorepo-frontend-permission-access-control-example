import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function CourseFormCreate(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>courses</strong></p>
      <p>🛠️ Action: <strong>create</strong></p>

      <Can I="create" a="course" fallback={<p>🚫 You do not have permission to create courses.</p>}>
        <form>✏️ You have access! Fill in course creation form...</form>
      </Can>
    </div>
  );
}
