import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function CourseFormRead(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>courses</strong></p>
      <p>🛠️ Action: <strong>read</strong></p>

      <Can I="read" a="course" fallback={<p>🚫 You do not have permission to view courses.</p>}>
        <div>📚 Here are the available courses you can view...</div>
      </Can>
    </div>
  );
}
