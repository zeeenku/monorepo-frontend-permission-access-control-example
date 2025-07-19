import { useState } from "react";
import { createFileRoute } from '@tanstack/react-router'
import type { Actions } from "~/packages/acl/src";
import LessonFormCreate from "~/packages/features/src/lessons/LessonFormCreate";
import LessonFormRead from "~/packages/features/src/lessons/LessonFormRead";
import LessonFormUpdate from "~/packages/features/src/lessons/LessonFormUpdate";
import LessonFormDelete from "~/packages/features/src/lessons/LessonFormDelete";

function LessonsPage() {
  const [activeTab, setActiveTab] = useState<Actions>("read");

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📖 Lessons Management</h1>

      <nav className="mb-6">
        {["create", "read", "update", "delete"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`mr-4 px-3 py-1 rounded ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <section>
        {activeTab === "create" && <LessonFormCreate />}
        {activeTab === "read" && <LessonFormRead />}
        {activeTab === "update" && <LessonFormUpdate />}
        {activeTab === "delete" && <LessonFormDelete />}
      </section>
    </div>
  );
}

export const Route = createFileRoute('/moderator/lessons')({
  component: LessonsPage,
});
