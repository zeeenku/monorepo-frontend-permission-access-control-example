import { can } from "~/acl/Can"
import { useRole } from "@myorg/acl/react";

export default function CourseList() {
  const role = useRole()
  if (!can(role, "courses", "read")) return null

  return <div>📚 List of courses...</div>
}
