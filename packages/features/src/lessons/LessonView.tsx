import { useRole, Can } from "~/packages/acl/src";

interface LessonViewProps {
  lessonId: string;
}

export default function LessonView({ lessonId }: LessonViewProps) {
  return (
    <Can I="read" a="lessons" fallback={<p>🚫 You cannot view lessons.</p>}>
      <div>
        <h3>Lesson {lessonId}</h3>
        {/* Lesson content here */}
      </div>
    </Can>
  );
}
