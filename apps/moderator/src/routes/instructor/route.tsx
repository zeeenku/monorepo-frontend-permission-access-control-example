import { Outlet, createFileRoute } from '@tanstack/react-router';
import { AclProvider } from '~/packages/acl'

export const Route = createFileRoute('/instructor')({
  component: AdminLayout,
})


export function AdminLayout() {
  console.log("instructor")
  return (
    <AclProvider role="instructor">
      <div>
        <h1 className="pt-10 font-semibold text-2xl max-w-4xl mx-auto">Instructor Dashboard</h1>
        <Outlet />
      </div>
    </AclProvider>
  );
}

