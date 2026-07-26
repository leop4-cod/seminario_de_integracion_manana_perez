// src/App.tsx

import DigitalCounter from "./01useState/DigitalCounter_mp"
import SafeCounter from "./01useState/SafeCounter_mp"
import TaskManager from "./01useState/TaskManager_mp"
import UserProfileForm from "./01useState/UserProfileForm_mp"
import DocumentTitle from "./02useEffect/DocumentTitle_mp"
import FetchUser from "./02useEffect/FetchUser_mp"
import FetchUsers from "./02useEffect/FetchUsers_mp"
import AutoFocusForm from "./03useRef/AutoFocusForm_mp"
import InlineEditor from "./03useRef/InlineEditor_mp"
import FruitList from "./components/FruitList_mp"
import ProductCard from "./components/ProductCard_mp"
import WelcomeBanner from "./components/WelcomeBanner_mp"



// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO: number = 41

const urnas = [
  { name: 'Urna de Madera', material: 'Madera', precio: 500, peso: 2 },
  { name: 'Urna de Bronce',  material: 'Bronce', precio: 1200, peso: 3 },
  { name: 'Urna de Mármol', material: 'Mármol', precio: 2000, peso: 4 },
]


export default function App() {
  const content =
    PASO ===  1 ? <WelcomeBanner /> :/*
    PASO ===  2 ? <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /> :
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" />
        <ColoredBox color="#22c55e" label="Success" />
        <ColoredBox color="#e00"    label="Danger" />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="Ana" timeOfDay="afternoon" /> :
    */
    PASO ===  6 ? <FruitList ataudes={urnas} title="Urnas Disponibles" /> :/*
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :
     */
    PASO === 11 ? <>
                    <WelcomeBanner />
                    <br/>
                    <ProductCard 
                    title="Ataúd Premium" 
                    description="Madera de caoba, interior de seda" 
                    highlighted /> 
                    <ProductCard 
                    title="Servicio de Cremación" 
                    description="Incluye urna estándar y trámites" 
                    /> 
                  </>:/*
    PASO === 12 ? <ProductCatalogList products={catalog} title="Productos disponibles" /> :
    PASO === 13 ? (
      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />
    ) :*/
    // Hook: useState
    PASO === 20 ? <DigitalCounter
                      initialValue={10}
                      step={5}
                      label="Contar Asistentes"
                      /> :
    PASO === 21 ? <SafeCounter/> :
    PASO === 22 ? <UserProfileForm/> :
    PASO === 23 ? <TaskManager /> :
    // Hook: useEffect
    PASO === 30 ? <DocumentTitle /> :
    PASO === 31 ? <FetchUser /> :
    PASO === 32 ? <FetchUsers /> :
    // Hook: use
    PASO === 40 ? <AutoFocusForm /> :
    PASO === 41 ? <InlineEditor /> :

    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}