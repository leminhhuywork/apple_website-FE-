import Features from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import NavBar from "./components/NavBar"
import Works from "./components/Works"


const App = () => {

  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Works />
      <Footer />
    </main>
  )
}

export default App
