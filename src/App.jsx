import { BrowserRouter } from 'react-router'
import Router from "./Composants/Router"
import Header from "./Composants/Header/Header"




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
