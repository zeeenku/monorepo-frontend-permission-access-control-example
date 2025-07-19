import { useRole, Can } from "~/packages/acl/src";

interface ExamFormProps {
  examId?: string;
}

export default function ExamForm({ examId }: ExamFormProps) {
  const action = examId ? "update" : "create";

  return (
    <Can I={action} a="exams" fallback={<p>🚫 You cannot create or edit exams.</p>}>
      <form>
        <h2>{examId ? "Edit" : "Create"} Exam</h2>
        {/* Form inputs */}
        <button type="submit">Save Exam</button>
      </form>
    </Can>
  );
}
