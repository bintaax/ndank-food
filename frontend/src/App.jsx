import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import MentionsLegales from "./pages/MentionsLegales"
import CGV from "./pages/CGV"

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
  <Route path="/cgv" element={<CGV />} />
      </Routes>

      <Footer />
    </>
  )
}
