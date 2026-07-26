// src/components/DocumentTitle.tsx

import { useEffect } from 'react'

export default function DocumentTitle() {
  useEffect(() => {
    document.title = 'Gestión de Funeraria'

    // Limpieza: restaurar el título al desmontar
    return () => {
      document.title = 'Funeraria App'
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña de la funeraria cambió al montar este componente.
    </p>
  )
}