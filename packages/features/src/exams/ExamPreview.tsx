import React from "react";
import { useRole, Can } from "~/packages/acl/src";

interface ExamPreviewProps {
  examId: string;
}


export default function ExamPreview({ examId }: ExamPreviewProps) {
  return (
    <Can I="read" a="exams" fallback={<p>🚫 Access denied to exams.</p>}>
      <div>
        <h3>Exam {examId} Preview</h3>
        {/* Exam questions preview here */}
      </div>
    </Can>
  );
}

