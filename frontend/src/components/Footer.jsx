import { Phone, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-base-100 border-t border-[#e6ddcf] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-accent">

        {/* Brand */}
        <div>
          <Link to="/">
            <img
              src="/logo.png"
              alt="Ndank Food Logo"
              className="inline-block w-32"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">Accueil</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-primary">Menu</Link>
            </li>
            <li>
              <a
                href="https://wa.me/33656837572"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Commander
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>

          <a
            href="https://wa.me/33656837572"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm mb-2 hover:text-primary"
          >
            <Phone size={16} />
            <span>Commande via WhatsApp</span>
          </a>

          <a
            href="https://instagram.com/ndank_food"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-primary"
          >
            <Instagram size={16} />
            <span>@ndank_food</span>
          </a>
        </div>
      </div>

      {/* Legal */}
      <div className="text-center text-xs text-accent pb-6 space-x-4">
        <Link to="/mentions-legales" className="underline">
          Mentions légales
        </Link>
        <Link to="/cgv" className="underline">
          CGV
        </Link>
        <div className="mt-2">
          © {new Date().getFullYear()} Ndank Food — Tous droits réservés
        </div>
      </div>
    </footer>
  )
}
