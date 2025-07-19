import React from "react";
import { useRole, Can } from "~/packages/acl/src";

export default function CourseFormDelete(): React.JSX.Element {
  const role = useRole();

  return (
    <div>
      <p>🔐 You are a: <strong>{role}</strong></p>
      <p>📦 Resource: <strong>courses</strong></p>
      <p>🛠️ Action: <strong>delete</strong></p>

      <Can I="delete" a="course" fallback={<p>🚫 You do not have permission to delete courses.</p>}>
        <button className="text-red-500">🗑️ Delete this course</button>
      </Can>
    </div>
  );
}
