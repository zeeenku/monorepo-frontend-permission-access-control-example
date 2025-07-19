import React from "react";
import { createFileRoute } from '@tanstack/react-router'
import ProgressReportView from "~/packages/features/src/progress-reports/ProgressReportView";

function ProgressReportPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📈 Progress Report</h1>
      <ProgressReportView />
    </div>
  );
}

export const Route = createFileRoute('/student/progress-report')({
  component: ProgressReportPage,
});
