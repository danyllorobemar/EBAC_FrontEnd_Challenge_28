import { useState } from "react"
import Formulario from "./components/IMCForm"
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de IMC</h1>
        <Formulario />
      </header>
    </div>
  );
}

export default App
