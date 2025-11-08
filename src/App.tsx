import About from "./main/About"
import Contact from "./main/Contact"
import Experience from "./main/Experince"
import Home from "./main/Home"
import Projects from "./main/Projects"
import Skills from "./main/Skills"
import Testimonials from "./main/Testimonials"
import Footer from "./pages/Footer"
import Navbar from "./pages/Navbar"


function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App
