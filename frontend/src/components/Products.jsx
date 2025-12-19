import { useEffect, useState } from "react"

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [persons, setPersons] = useState("")
  const [date, setDate] = useState("")
  const [options, setOptions] = useState("")
const [paymentMethod, setPaymentMethod] = useState("")




  const phoneNumber = "33656837572"

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return <p className="text-center">Chargement...</p>

  function formatDate(dateString) {
  if (!dateString) return "—"

  const date = new Date(dateString)

  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function getToday() {
  const today = new Date()
  return today.toISOString().split("T")[0]
}



  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={`http://127.0.0.1:8000/${product.image}`}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="text-sm opacity-70">{product.description}</p>

             {/* MENTION SELON LE TYPE */}
{product.category === "Plats" && (
  <span className="font-bold text-[#C58B59]">
    À partir de {product.price} € / pers.
  </span>
)}

{product.category === "Snacks" && (
  <span className="font-bold text-[#C58B59]">
    Vendu par paquet
  </span>
)}

{product.category === "Boissons" && (
  <span className="font-bold text-[#C58B59]">
    Prix selon format
  </span>
)}


              <button
                className="btn btn-success btn-sm mt-4"
                onClick={() => {
                  setSelectedProduct(product)
                  setPersons("")
                  setDate("")
                }}
              >
                Commander
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ MINI FORMULAIRE */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Commander : {selectedProduct.name}
            </h2>

            <div className="flex flex-col gap-3">
           
            <div className="mt-4 flex flex-col gap-3">
  <input
    type="number"
    min="1"
    placeholder="Nombre de personnes"
    className="input input-bordered w-full"
    value={persons}
    onChange={(e) => setPersons(e.target.value)}
  />

  <input
    type="date"
    min={getToday()}
    className="input input-bordered w-full"
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />
  <div className="mt-4">
  <p className="text-sm font-medium mb-2">
    Moyen de paiement
  </p>

  <label className="flex items-center gap-2 text-sm cursor-pointer mb-2">
    <input
      type="radio"
      name="payment"
      className="radio radio-sm"
      value="Espèces"
      checked={paymentMethod === "Espèces"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    <span>Espèces (livraison ou retrait)</span>
  </label>

  <label className="flex items-center gap-2 text-sm cursor-pointer">
    <input
      type="radio"
      name="payment"
      className="radio radio-sm"
      value="Revolut"
      checked={paymentMethod === "Revolut"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    <span>Revolut</span>
  </label>
</div>


  <textarea
  placeholder="Options / précisions (ex : riz blanc, grande bouteille de jus...)"
  className="textarea textarea-bordered w-full"
  rows={3}
  value={options}
  onChange={(e) => setOptions(e.target.value)}
/>

<p className="text-xs opacity-60">
  Les options peuvent influencer le prix final
</p>



  {date && (
    <p className="text-xs opacity-60">
      Date choisie : {formatDate(date)}
    </p>
  )}
</div>

            </div>

            <div className="flex justify-between mt-6">
              <button
                className="btn btn-ghost"
                onClick={() => setSelectedProduct(null)}
              >
                Annuler
              </button>

              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  `Bonjour, je souhaiterais commander chez Ndank Food 🍽️.

Plat : ${selectedProduct.name}
Nombre de personnes : ${persons || "—"}
Date souhaitée : ${formatDate(date)}


Merci 😊`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                Envoyer sur WhatsApp
              </a>
              
            </div>


            <p className="text-xs opacity-60 mt-5 text-center">
  Commande minimum 72h à l’avance
</p>

          </div>
        </div>
      )}
    </section>
  )
}

