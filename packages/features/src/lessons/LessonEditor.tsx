import { useRole, Can } from "~/packages/acl/src";

interface LessonEditorProps {
  lessonId?: string; // optional for new lesson
}

export default function LessonEditor({ lessonId }: LessonEditorProps) {
  const role = useRole();

  // Determine action based on presence of lessonId
  const action = lessonId ? "update" : "create";

  return (
    <Can I={action} a="lessons" fallback={<p>🚫 You don't have permission to edit lessons.</p>}>
      <form>
        <h2>{lessonId ? "Edit" : "Create"} Lesson</h2>
        {/* Inputs here */}
        <button type="submit">Save Lesson</button>
      </form>
    </Can>
  );
}
