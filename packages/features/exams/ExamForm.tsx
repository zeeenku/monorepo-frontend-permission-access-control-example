import React from "react";
import { can } from "@myorg/acl";
import { useRole } from "@myorg/acl/react";

interface ExamFormProps {
  examId?: string;
}

export default function ExamForm({ examId }: ExamFormProps) {
  const role = useRole();
  const canCreate = examId ? can(role, "exams", "update") : can(role, "exams", "create");

  if (!canCreate) return <p>🚫 You cannot create or edit exams.</p>;

  return (
    <form>
      <h2>{examId ? "Edit" : "Create"} Exam</h2>
      {/* Form inputs */}
      <button type="submit">Save Exam</button>
    </form>
  );
}
