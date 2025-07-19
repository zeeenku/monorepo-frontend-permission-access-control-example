import { Outlet, createFileRoute } from '@tanstack/react-router';
import { AclProvider } from '~/packages/acl'

export const Route = createFileRoute('/super-admin')({
  component: AdminLayout,
})


export function AdminLayout() {
  console.log("admin dashboard")
  return (
    <AclProvider role="super-admin">
      <div>
        <h1>Admin Dashboard</h1>
        <Outlet />
      </div>
    </AclProvider>
  );
}

