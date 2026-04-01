import { BrowserRouter } from 'react-router'
import Router from "./Composants/Router"
import Header from "./Composants/Header/Header"




function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
