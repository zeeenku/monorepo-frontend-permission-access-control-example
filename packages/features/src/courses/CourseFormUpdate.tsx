import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function CourseFormUpdate(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>courses</strong></p>
      <p>🛠️ Action: <strong>update</strong></p>

      <Can I="update" a="course" fallback={<p>🚫 You do not have permission to update courses.</p>}>
        <form>🔧 Update course form goes here...</form>
      </Can>
    </div>
  );
}
