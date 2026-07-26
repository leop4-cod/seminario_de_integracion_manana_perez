import { useState } from 'react'

interface FichaDifunto {
  name: string
  lastname: string
  emailContacto: string
  age: number
}

export default function UserProfileForm() {
  const [difunto, setDifunto] = useState<FichaDifunto>({
    name: '',
    lastname: '',
    emailContacto: '',
    age: 0,
  })

  function handleChange(field: keyof FichaDifunto, value: string | number) {
    setDifunto((prev) => ({
      ...prev,        // copia todos los campos actuales
      [field]: value, // sobreescribe solo el campo que cambió
    }))
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <input
        placeholder="Nombre del Difunto"
        value={difunto.name}
        onChange={(e) => handleChange('name', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Apellido del Difunto"
        value={difunto.lastname}
        onChange={(e) => handleChange('lastname', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Email del Familiar de Contacto"
        type="email"
        value={difunto.emailContacto}
        onChange={(e) => handleChange('emailContacto', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Edad al Fallecer"
        type="number"
        value={difunto.age}
        onChange={(e) => handleChange('age', Number(e.target.value))}
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{difunto.name || '—'} {difunto.lastname || '—'}</strong> · Contacto: {difunto.emailContacto || '—'} · {difunto.age || '—'} años
        </p>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{difunto.name || '—'}</strong> · {difunto.emailContacto || '—'} · {difunto.age || '—'} años
        </p>
      </div>

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{difunto.name || '—'} {difunto.lastname || '—'}</strong> · Contacto: {difunto.emailContacto || '—'} · {difunto.age || '—'} años
        </p>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{difunto.name || '—'}</strong> · {difunto.emailContacto || '—'} · {difunto.age || '—'} años
        </p>
      </div>
    </form>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}