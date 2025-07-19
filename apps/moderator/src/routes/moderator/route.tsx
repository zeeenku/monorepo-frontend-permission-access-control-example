import { Outlet, createFileRoute } from '@tanstack/react-router';
import { AclProvider } from '~/packages/acl'

export const Route = createFileRoute('/moderator')({
  component: AdminLayout,
})


export function AdminLayout() {
  console.log("Moderator dashboard")
  return (
    <AclProvider role="moderator">
      <div>
        <h1>moderator Dashboard</h1>
        <Outlet />
      </div>
    </AclProvider>
  );
}

