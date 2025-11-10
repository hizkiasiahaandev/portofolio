import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import "aos/dist/aos.css"
import AOS from "aos"

AOS.init({
  duration: 2000,
  once: false,
  offset: 120,
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
