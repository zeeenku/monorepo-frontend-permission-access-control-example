import React from "react";
import { can } from "@myorg/acl";
import { useRole } from "@myorg/acl/react";

interface ExamPreviewProps {
  examId: string;
}

export default function ExamPreview({ examId }: ExamPreviewProps) {
  const role = useRole();
  if (!can(role, "exams", "read")) return <p>🚫 Access denied to exams.</p>;

  return (
    <div>
      <h3>Exam {examId} Preview</h3>
      {/* Exam questions preview here */}
    </div>
  );
}
