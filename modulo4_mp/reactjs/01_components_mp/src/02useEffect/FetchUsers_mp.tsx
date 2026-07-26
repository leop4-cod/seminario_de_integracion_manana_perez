// src/components/FetchDifuntos.tsx

import { useState, useEffect } from 'react'

interface Cementerio {
    name: string;
    catchPhrase: string
    bs: string
  }

interface Difunto {
  id:       number
  name:     string
  email:    string
  username: string
  company: Cementerio
}

export default function FetchUsers() {
  const [difuntos,    setDifuntos]    = useState<Difunto[]>([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    // Flag de cancelación — evita race conditions y
    // actualizaciones de estado en componentes desmontados
    let cancelled = false

    async function fetchDifuntos() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Difunto[] = await res.json()

        // Solo actualiza si el componente sigue montado
        if (!cancelled) setDifuntos(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchDifuntos()

    return () => { cancelled = true }
  }, [])

  return (
    <div style={{ maxWidth: 360 }}>
      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando registros...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {difuntos && !loading && (
        difuntos.map((difunto) => (
        <div key={difunto.id} style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8, marginBottom: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{difunto.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            Alias: {difunto.username}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            {difunto.email}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            Cementerio: {difunto.company.name}
          </p>
        </div>
        ))
      )}
    </div>
  )
}