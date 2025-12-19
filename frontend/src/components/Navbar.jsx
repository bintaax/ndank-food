import { Phone } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-20 bg-base-100 shadow-sm px-6">
      
      {/* Logo */}
      <div className="flex-1">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Ndank Food logo"
            className="w-20"
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex gap-6 text-accent">
        <Link to="/" className="hover:text-primary">
          Accueil
        </Link>

        <Link to="/menu" className="hover:text-primary">
          Menu
        </Link>

    
      </div>

      {/* Action principale */}
      <div className="ml-4">
        <a
          href="https://wa.me/33656837572"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary flex gap-2"
        >
          <Phone size={18} />
          Commander
        </a>
      </div>
    </div>
  )
}
