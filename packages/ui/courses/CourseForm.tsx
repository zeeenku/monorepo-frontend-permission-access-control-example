// CourseForm.tsx
import { can } from "@myorg/acl"
import { useRole } from "@myorg/acl/react"

export default function CourseForm() {
  const role = useRole()
  if (!can(role, "courses", "create")) return <p>🚫 No permission</p>

  return <form>✏️ Create or edit course...</form>
}
