import React, { useState } from "react";
import { createFileRoute } from '@tanstack/react-router'
import type { Actions } from "~/packages/acl/src";
import CourseFormCreate from "~/packages/features/src/courses/CourseFormCreate";
import CourseFormRead from "~/packages/features/src/courses/CourseFormRead";
import CourseFormUpdate from "~/packages/features/src/courses/CourseFormUpdate";
import CourseFormDelete from "~/packages/features/src/courses/CourseFormDelete";

function CoursesPage() {
  const [activeTab, setActiveTab] = useState<Actions>("read");

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📚 Courses Management</h1>

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
        {activeTab === "create" && <CourseFormCreate />}
        {activeTab === "read" && <CourseFormRead />}
        {activeTab === "update" && <CourseFormUpdate />}
        {activeTab === "delete" && <CourseFormDelete />}
      </section>
    </div>
  );
}

export const Route = createFileRoute('/moderator/courses')({
  component: CoursesPage,
});
