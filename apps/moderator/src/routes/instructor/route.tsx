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
        <h1>instructor Dashboard</h1>
        <Outlet />
      </div>
    </AclProvider>
  );
}

