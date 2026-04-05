import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { Provider } from "react-redux"
import store from "./store.js"
import App from "./App.jsx"
import "primereact/resources/themes/lara-light-teal/theme.css"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
