import React from "react";
import { can } from "@myorg/acl";
import { useRole } from "@myorg/acl/react";

interface LessonViewProps {
  lessonId: string;
}

export default function LessonView({ lessonId }: LessonViewProps) {
  const role = useRole();
  if (!can(role, "lessons", "read")) return <p>🚫 You cannot view lessons.</p>;

  return (
    <div>
      <h3>Lesson {lessonId}</h3>
      {/* Lesson content here */}
    </div>
  );
}
