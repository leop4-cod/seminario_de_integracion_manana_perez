# tuplas.py - Funeraria San Eterno

# Crear tuplas
vacia      = ()
unitaria   = (42,)          # ← la coma es obligatoria para una tupla de un elemento
coordenada_sala = (3, 4)
rgb_color_logo  = (40, 40, 40)
difunto    = ("Don Carlos", 78, "Quito")

# Tupla sin paréntesis — el empaquetado implícito
sala_capilla  = "Capilla A", "Capilla B"            # también es una tupla
print(type(sala_capilla))          # <class 'tuple'>

# Acceso — igual que las listas
print(difunto[0])           # Don Carlos
print(difunto[-1])          # Quito
print(difunto[1:])          # (78, 'Quito')

# Las tuplas son INMUTABLES
# difunto[0] = "Doña Rosa"  # TypeError — no se puede modificar

# Desempaquetado (unpacking)
nombre_difunto, edad_difunto, ciudad_difunto = difunto
print(nombre_difunto, edad_difunto, ciudad_difunto)  # Don Carlos 78 Quito

# Desempaquetado con *
primer_servicio, *resto_servicios = (1001, 1002, 1003, 1004, 1005)
print(primer_servicio)   # 1001
print(resto_servicios)   # [1002, 1003, 1004, 1005]

*servicios_anteriores, ultimo_servicio = (1001, 1002, 1003, 1004, 1005)
print(servicios_anteriores)    # [1001, 1002, 1003, 1004]
print(ultimo_servicio)         # 1005

# Tuplas de retorno de funciones
def calcular_costo(base, descuento):
    if descuento < 0:
        return None, "El descuento no puede ser negativo"
    return base - descuento, None

total, error = calcular_costo(3500, 500)
if error:
    print(f"Error: {error}")
else:
    print(f"Costo final: ${total:.4f}")

# Tuplas como claves de diccionario (las listas NO pueden ser claves)
salas = {(1, 1): "Sala Paz", (1, 2): "Sala Esperanza", (2, 1): "Sala Serenidad"}
print(salas[(1, 1)])   # Sala Paz

# Cuándo usar tuple vs list
# tuple → datos que no cambian: coordenadas de sala, datos del difunto, registros
# list  → datos que se modifican: lista de servicios activos, historial de pagos, etc.
