import React from "react";
import { can } from "@myorg/acl";
import { useRole } from "@myorg/acl/react";

interface LessonEditorProps {
  lessonId?: string; // optional for new lesson
}

export default function LessonEditor({ lessonId }: LessonEditorProps) {
  const role = useRole();
  const canEdit = lessonId ? can(role, "lessons", "update") : can(role, "lessons", "create");

  if (!canEdit) return <p>🚫 You don't have permission to edit lessons.</p>;

  return (
    <form>
      <h2>{lessonId ? "Edit" : "Create"} Lesson</h2>
      {/* Inputs here */}
      <button type="submit">Save Lesson</button>
    </form>
  );
}
