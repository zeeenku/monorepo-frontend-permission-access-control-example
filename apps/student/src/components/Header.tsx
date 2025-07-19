import { Link, useRouter } from '@tanstack/react-router'
import { useState } from 'react'

const roles = ['admin', 'super-admin', 'moderator', 'instructor', 'student'] as const

const rolePorts: Record<typeof roles[number], number> = {
  admin: 3000,
  'super-admin': 3000,
  moderator: 4000,
  instructor: 4000,
  student: 5000,
}

export default function Header() {
  const router = useRouter()
  const currentPath = router.state.location.pathname

  const pathSegments = currentPath.split('/')
  const currentRole = roles.includes(pathSegments[1] as any) ? pathSegments[1] : 'admin'
  const [selectedRole, setSelectedRole] = useState<typeof roles[number]>(currentRole as any)

  const handleRoleChange = (newRole: typeof roles[number]) => {
    const subPath = pathSegments.slice(2).join('/') || ''
    const newPath = `/${newRole}${subPath ? `/${subPath}` : ''}`
    const newPort = rolePorts[newRole]

    // redirect to appropriate port and path
    const protocol = window.location.protocol
    const hostname = window.location.hostname
    const fullURL = `${protocol}//${hostname}:${newPort}${newPath}`

    setSelectedRole(newRole)
    window.location.href = fullURL
  }

  const linkTo = (subPath: string) => `/${selectedRole}/${subPath}`

  return (
    <header className="p-4 flex items-center justify-between bg-white text-black shadow">
      <div className="font-bold text-xl">
        <Link to="/">🏠 Home</Link>
      </div>

      <div className="flex items-center gap-4">
        {/* Role selector */}
        <div className="flex gap-2 items-center">
          {roles.map(role => (
            <button
              key={role}
              onClick={() => handleRoleChange(role)}
              className={`px-2 py-1 text-sm rounded ${
                selectedRole === role ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Nav links */}
        <nav className="flex gap-4 ml-8">
          <Link to={linkTo('courses')} className="hover:underline">Courses</Link>
          <Link to={linkTo('lessons')} className="hover:underline">Lessons</Link>
          <Link to={linkTo('progress-report')} className="hover:underline">Progress Report</Link>
          <Link to={linkTo('settings')} className="hover:underline">Settings</Link>
        </nav>
      </div>
    </header>
  )
}
