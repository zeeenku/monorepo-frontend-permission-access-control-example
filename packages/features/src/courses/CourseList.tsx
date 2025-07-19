import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function CourseList(): React.JSX.Element {
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
        🛠️ Action: <strong>read</strong>
      </p>

      <Can I="read" a="courses" fallback={<p>🚫 Sorry, you do not have permission to view courses.</p>}>
        <div>📚 List of courses...</div>
      </Can>
    </div>
  );
}