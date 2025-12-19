import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="bg-[#F5EFE6] min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 items-center">

        {/* TEXTE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#4A2E1F] mb-4">
            Bienvenue chez <br />
            <span className="text-[#C58B59]">Ndank Food</span> 🍽️
          </h1>

          <p className="text-lg italic text-[#4A2E1F] mb-4">
            La cuisine sénégalaise préparée avec amour et générosité.
          </p>

          <p className="text-sm md:text-base text-[#4A2E1F] opacity-80 mb-6">
            Ndank Food vous propose des plats traditionnels sénégalais faits
            maison, cuisinés sur commande avec des ingrédients soigneusement
            sélectionnés. Chaque plat est préparé avec passion pour vous offrir
            le véritable goût du Sénégal, comme à la maison.
          </p>

          {/* CTA */}
          <Link to="/menu" className="btn btn-primary flex gap-2 w-fit">
            <ShoppingCart size={20} />
            Commander maintenant
          </Link>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/public/uploads/products/yassa-poulet.jpg"
            alt="Plat sénégalais Ndank Food"
            className="rounded-2xl shadow-lg max-h-[420px] object-cover"
          />
        </div>

      </div>
    </section>
  )
}
