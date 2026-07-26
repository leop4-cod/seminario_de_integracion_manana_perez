import { useState } from 'react'

interface ServicioFunerario {
  id: number
  title: string
  text: string
  done: boolean
}

export default function TaskManager() {
  const [servicios, setServicios] = useState<ServicioFunerario[]>([])
  const [input, setInput] = useState('')
  const [title, setTitle] = useState('')

  // AGREGAR — spread del array anterior más el nuevo item
  function addServicio() {
    if (!input.trim()) return
    setServicios((prev) => [
      ...prev,
      { id: Date.now(), title: title.trim(), text: input.trim(), done: false },
    ])
    setInput('')
    setTitle('')
  }

  // ELIMINAR — filter crea un nuevo array sin el elemento
  function removeServicio(id: number) {
    setServicios((prev) => prev.filter((servicio) => servicio.id !== id))
  }

  // ACTUALIZAR — map crea un nuevo array con el elemento modificado
  function toggleServicio(id: number) {
    setServicios((prev) =>
      prev.map((servicio) =>
        servicio.id === id ? { ...servicio, done: !servicio.done } : servicio
      )
    )
  }

  return (
    <div style={{ maxWidth: 380 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addServicio()}
          placeholder="Nombre del Difunto..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addServicio()}
          placeholder="Detalles del Servicio..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={addServicio}
          style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Agregar
        </button>
      </div>

      {servicios.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay servicios. ¡Agrega uno!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {servicios.map((servicio) => (
          <li
            key={servicio.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={servicio.done}
              onChange={() => toggleServicio(servicio.id)}
            />
            <span
              style={{
                flex: 1,
                textDecoration: servicio.done ? 'line-through' : 'none',
                color: servicio.done ? '#aaa' : '#333',
              }}
            >
              {servicio.title}
            </span>
            <span
              style={{
                flex: 1,
                textDecoration: servicio.done ? 'line-through' : 'none',
                color: servicio.done ? '#aaa' : '#333',
              }}
            >
              {servicio.text}
            </span>
            <button
              onClick={() => removeServicio(servicio.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {servicios.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {servicios.filter((s) => s.done).length} de {servicios.length} completados
        </p>
      )}
    </div>
  )
}