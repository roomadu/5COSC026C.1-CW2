<<<<<<< Updated upstream

import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div className="app">
      <header className="app-header">
        <h1>Roomadu Sample Main Page</h1>
        <p className="tagline">A minimal React + Vite starter page</p>
      </header>

      <main className="content">
        <section className="card">
          <h2>Interactive Counter</h2>
          <div className="counter">
            <button onClick={() => setCount((c) => c - 1)}>-</button>
            <span className="count">{count}</span>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
          </div>
        </section>

        <section className="card">
          <h2>Say Hello</h2>
          <label>
            Your name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name"
            />
          </label>
          {name && <p className="greeting">Hello, {name}!</p>}
        </section>

        <section className="card">
          <h2>Notes</h2>
          <ul>
            <li>Open src/App.jsx to edit this page.</li>
            <li>Run npm install then npm start (or npm run dev) to run the dev server.</li>
          </ul>
        </section>
      </main>

      <footer className="app-footer">
        <small>Built with React + Vite</small>
      </footer>
    </div>
  )
}
=======
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage.jsx";
import PropertyPage from "./pages/PropertyPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/property/:id" element={<PropertyPage />} />
    </Routes>
  );
}

export default App;
>>>>>>> Stashed changes
