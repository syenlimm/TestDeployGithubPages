import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [teks, setTeks] = useState('')

  return (
    <>
      <h2>Penambahan Angka</h2>
      <h2>Penambahan Ke: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tambah 1 lagi</button>
      <button onClick={() => setCount(count + 1)}>Tambah 1 lagi</button>

      <h2>Input Teks</h2>
      <input value={teks} onChange={(e) => setTeks(e.target.value)} />
      <p>Hasil inputan: {teks}</p>
    </>
  )
}

export default App
