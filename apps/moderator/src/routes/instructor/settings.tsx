import { useState } from "react";
import { createFileRoute } from '@tanstack/react-router'
import type { Actions } from "~/packages/acl/src";
import SettingFormCreate from "~/packages/features/src/settings/SettingFormCreate";
import SettingFormRead from "~/packages/features/src/settings/SettingFormRead";
import SettingFormUpdate from "~/packages/features/src/settings/SettingFormUpdate";
import SettingFormDelete from "~/packages/features/src/settings/SettingFormDelete";

function SettingPage() {
  const [activeTab, setActiveTab] = useState<Actions>("read");

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">⚙️ Settings</h1>

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
        {activeTab === "create" && <SettingFormCreate />}
        {activeTab === "read" && <SettingFormRead />}
        {activeTab === "update" && <SettingFormUpdate />}
        {activeTab === "delete" && <SettingFormDelete />}
      </section>
    </div>
  );
}

export const Route = createFileRoute('/instructor/settings')({
  component: SettingPage,
});
