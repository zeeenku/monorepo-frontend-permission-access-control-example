import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between bg-white text-black shadow">
      <div className="font-bold text-xl">
        <Link to="/">🏠 Home</Link>
      </div>
      <nav className="flex gap-4">
        <Link to="/admin/courses" className="hover:underline">Courses</Link>
        <Link to="/admin/lessons" className="hover:underline">Lessons</Link>
        <Link to="/admin/progress-report" className="hover:underline">Progress Report</Link>
        <Link to="/admin/settings" className="hover:underline">Settings</Link>
      </nav>
    </header>
  )
}
