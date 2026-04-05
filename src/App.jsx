import { BrowserRouter } from "react-router"
import Router from "./components/Router"
import Header from "./components/Header/Header"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Router />
      </main>
    </BrowserRouter>
  )
}

export default App
