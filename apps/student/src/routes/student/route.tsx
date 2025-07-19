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
        <h1>student Dashboard</h1>
        <Outlet />
      </div>
    </AclProvider>
  );
}

