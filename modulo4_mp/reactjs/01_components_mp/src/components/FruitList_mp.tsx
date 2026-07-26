// src/components/FruitList.tsx

interface Ataud {
  name: string
  material: string
  precio: number,
  peso: number
}

interface AtaudListProps {
  ataudes: Ataud[]
  title?: string
}

export default function FruitList({ ataudes, title = 'Ataúdes' }: AtaudListProps) {
  if (ataudes.length === 0) {
    return <p style={{ color: '#999' }}>No hay ataúdes en el catálogo.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {ataudes.map((ataud) => (
          <li
            key={ataud.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{ataud.material} {ataud.name}</span>
            <span>Peso soportado: {ataud.peso} kg</span>
            <span style={{ color: '#888', fontSize: 13 }}>${ataud.precio}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}