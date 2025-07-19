import { Outlet, createFileRoute } from '@tanstack/react-router';
import { AclProvider } from '~/packages/acl'

export const Route = createFileRoute('/admin')({
  component: AdminLayout,
})


export function AdminLayout() {
  console.log("admin dashboard")
  return (
    <AclProvider role="admin">
      <div>
        <h1>Admin Dashboard</h1>
        <Outlet />
      </div>
    </AclProvider>
  );
}

