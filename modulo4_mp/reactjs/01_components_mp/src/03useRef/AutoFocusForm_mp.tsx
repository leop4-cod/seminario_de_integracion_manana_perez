// src/components/AutoFocusForm.tsx

import { useRef, useEffect } from 'react'

export default function AutoFocusForm() {
  const difuntoNombreRef  = useRef<HTMLInputElement>(null)
  const familiarRef  = useRef<HTMLInputElement>(null)
  const contactoRef = useRef<HTMLInputElement>(null)

  // Foco en el primer campo al montar
  useEffect(() => {
    contactoRef.current?.focus()
  }, [])

  function handleNameKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // Avanza al siguiente campo con Enter
    if (e.key === 'Enter') {
      e.preventDefault()
      contactoRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input
        ref={difuntoNombreRef}
        placeholder="Nombre del difunto"
        onKeyDown={handleNameKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={contactoRef}
        type="text"
        placeholder="Contacto de emergencia"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={familiarRef}
        placeholder="Nombre del familiar"
        onKeyDown={handleNameKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Registrar Servicio
      </button>
    </form>
  )
}