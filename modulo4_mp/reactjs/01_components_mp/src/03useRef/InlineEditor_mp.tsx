// src/components/InlineEditor.tsx

import { useRef, useState } from 'react'

export default function InlineEditor() {
  const ataudRef = useRef<HTMLInputElement>(null)
  const epitafioRef = useRef<HTMLInputElement>(null)
  const [saved, setSaved] = useState('Escribe el epitafio y guarda')
  

  function handleSave() {
    // Se lee el valor directamente del DOM — sin useState intermedio
    const value = ataudRef.current?.value ?? ''
    const value2 = epitafioRef.current?.value ?? ''
    setSaved(value.trim() === '' && 
            value2.trim() === '' ? '(vacío)' : value +' '+ value2)
  }

  function handleClear() {
    if (ataudRef.current) {
      ataudRef.current.value = ''  // muta el DOM directamente
      ataudRef.current.focus()
    }
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Inscripción Guardada: <strong style={{ color: '#111827' }}>{saved}</strong>
      </p>

      <input
        ref={ataudRef}
        defaultValue=""
        placeholder="Tipo de ataúd..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <input
        ref={epitafioRef}
        defaultValue=""
        placeholder="Escribe el epitafio..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar Inscripción
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}