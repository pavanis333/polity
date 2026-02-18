import { Link, useLocation } from 'react-router-dom'
import { BookOpen, BarChart3 } from 'lucide-react'

export default function Layout({ children }) {
  const location = useLocation()

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="header-logo">
            <BookOpen size={24} />
            UPSC Prelims Revision
          </Link>
          <nav className="header-nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Topics
            </Link>
            <Link to="/progress" className={location.pathname === '/progress' ? 'active' : ''}>
              <BarChart3 size={16} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              Progress
            </Link>
          </nav>
        </div>
      </header>
      <main className="container page">
        {children}
      </main>
    </>
  )
}
