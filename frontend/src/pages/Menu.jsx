import Products from "../components/Products"

export default function Menu() {
  return (
    <main className="min-h-screen bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#4A2E1F] mb-4">
          Notre menu 🍽️
        </h1>

        <p className="text-sm opacity-70 mb-8">
          Tous nos plats sont préparés sur commande.
          Les prix indiqués sont donnés à titre indicatif et peuvent varier
          selon le nombre de personnes.
        </p>

        <Products />

        <section className="bg-white rounded-2xl p-6 mb-10 shadow">
  <h2 className="text-2xl font-bold text-[#4A2E1F] mb-4">
    Comment commander ? 📦
  </h2>

  <ol className="list-decimal list-inside space-y-2 text-sm">
    <li>Choisissez vos plats sur notre menu</li>
    <li>Contactez-nous par WhatsApp</li>
    <li>Indiquez le nombre de personnes et la date souhaitée</li>
    <li>Nous confirmons la commande et le tarif</li>
  </ol>

  <p className="text-xs opacity-70 mt-4">
    Tous nos plats sont préparés sur commande.
  </p>
</section>

      </div>
    </main>
  )
}
