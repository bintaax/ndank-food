import { ShoppingCart, Phone } from "lucide-react"

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-10 bg-base-100 shadow-sm px-6">
      {/* Logo / Nom */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-accent" href="/">
          <img src="/logo.png" alt="Ndank FoodLogo" className="inline-block" style={{ width: '120px' }} />  
        </a>
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-6 text-accent">
        <a className="hover:text-primary">Accueil</a>
        <a className="hover:text-primary">Menu</a>
        <a className="hover:text-primary">Commander</a>
        <a className="hover:text-primary">Contact</a>
      </div>

      {/* Actions */}
      <div className="flex gap-3 ml-4">
        <button className="btn btn-ghost btn-circle text-accent">
          <ShoppingCart size={22} />
        </button>

        <button className="btn btn-primary hidden sm:flex gap-2">
          <Phone size={18} />
          Commander
        </button>
      </div>
    </div>
  )
}
