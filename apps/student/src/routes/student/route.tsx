import { Outlet, createFileRoute } from '@tanstack/react-router';
import { AclProvider } from '~/packages/acl'

export const Route = createFileRoute('/student')({
  component: AdminLayout,
})


export function AdminLayout() {
  console.log("student")
  return (
    <AclProvider role="student">
      <div>
        <h1 className="pt-10 font-semibold text-2xl max-w-4xl mx-auto">Student Dashboard</h1>
        <Outlet />
      </div>
    </AclProvider>
  );
}

