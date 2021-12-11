import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"
import Play from "./components/Play"
import { Switch } from "react-router"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/play/*" element={<Play />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
