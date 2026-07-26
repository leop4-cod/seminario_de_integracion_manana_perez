// src/components/FetchDifunto.tsx

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

export default function FetchUser() {
  const [difuntoId,  setDifuntoId]  = useState(1)
  const [difunto,    setDifunto]    = useState<Difunto | null>(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    // Flag de cancelación — evita race conditions y
    // actualizaciones de estado en componentes desmontados
    let cancelled = false

    async function fetchDifunto() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${difuntoId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Difunto = await res.json()

        // Solo actualiza si el componente sigue montado
        if (!cancelled) setDifunto(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchDifunto()

    return () => { cancelled = true }
  }, [difuntoId])

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setDifuntoId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: difuntoId === id ? '#0070f3' : '#fff',
              color:      difuntoId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: difuntoId === id ? 600 : 400,
            }}
          >
            Difunto {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando registro...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {difunto && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
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
      )}
    </div>
  )
}