import { Outlet, createFileRoute } from '@tanstack/react-router';
import { AclProvider } from '~/packages/acl'
import { Header } from '~/packages/features/src/dashboard/Header'

export const Route = createFileRoute('/admin')({
  component: AdminLayout,
})


export function AdminLayout() {
  console.log("admin dashboard")
  return (
    <AclProvider role="admin">
      <div>
        <h1 className="pt-10 font-semibold text-2xl max-w-4xl mx-auto">Admin Dashboard</h1>
        <Header/>
        <Outlet />
      </div>
    </AclProvider>
  );
}

