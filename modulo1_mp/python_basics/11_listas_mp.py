print("Listas - Funeraria San Eterno")
print("Crear listas")
vacia=[]
print(vacia)
codigos_servicio=[1001,1002,1003,1004,1005,1006,1007]
print(codigos_servicio)
difuntos=["Carlos Ruiz", "Rosa Mendez", "Pedro Soto", "María Lima","Javier Cruz","Ana Peña"]
print(difuntos)
mixta=[1, "Velacion", "Cremacion", True, None, 2500.0]
print(mixta)
anidada=[1,[5,5,[6,4,4]],5,7]
print(anidada)
print("Acceder a elementos de la lista")
print(difuntos[0])
print(difuntos[-1])
print(difuntos[1:3]) 
print(difuntos[::-1])

print("CRUD en listas de servicios funerarios")
servicios=["velacion","entierro","cremacion","traslado"]
#agregar
servicios.append("repatriacion")
print(servicios)
servicios.insert(1, "embalsamamiento")
print(servicios)
servicios.extend(["preparacion", "maquillaje"])
#modificar
servicios[0]="velacion_premium"
print(servicios)
#eliminar elementos
servicios.remove("traslado")
print(servicios)
eliminado=servicios.pop()
print(servicios)
eliminado=servicios.pop(0)
print(servicios)
del servicios[0]
print(servicios)


print("buscar valores en los elementos de una lista")
print("cremacion" in servicios)
print(servicios.index("cremacion"))
print(servicios.count("cremacion"))

print("ordenar listas de costos")
costos_desordenados=[3500,1200,4500,800,1500,2200,5000,900,700,1100,2800]
print(costos_desordenados)
costos_desordenados.sort()
print(costos_desordenados)
costos_desordenados.sort(reverse=True)
print(costos_desordenados)
ordenada=sorted(costos_desordenados)
print(costos_desordenados)
print(ordenada)

# lista-funcional.py - Inventario de servicios funerarios

servicios_catalogo = [
    {"nombre": "Velacion Basica",   "precio": 1500, "disponible": 5,  "cat": "velacion"},
    {"nombre": "Urna de Madera",    "precio": 800,  "disponible": 10, "cat": "urna"},
    {"nombre": "Cremacion",         "precio": 2000, "disponible": 3,  "cat": "cremacion"},
    {"nombre": "Urna Premium",      "precio": 2500, "disponible": 2,  "cat": "urna"},
    {"nombre": "Traslado Local",    "precio": 300,  "disponible": 0,  "cat": "traslado"},
]

# map — transforma cada elemento
precios     = list(map(lambda s: s["precio"], servicios_catalogo))
nombres     = list(map(lambda s: s["nombre"].upper(), servicios_catalogo))
print(precios)   # [1500, 800, 2000, 2500, 300]

# filter — filtra elementos
disponibles   = list(filter(lambda s: s["disponible"] > 0, servicios_catalogo))
urnas         = list(filter(lambda s: s["cat"] == "urna", servicios_catalogo))
print([s["nombre"] for s in disponibles])

# sorted con key
por_precio  = sorted(servicios_catalogo, key=lambda s: s["precio"])
mas_caro    = sorted(servicios_catalogo, key=lambda s: s["precio"], reverse=True)[0]
print(f"Más caro: {mas_caro['nombre']} ({mas_caro['precio']}$)")

# sum, min, max con key
total       = sum(s["precio"] * s["disponible"] for s in servicios_catalogo)
mas_barato  = min(servicios_catalogo, key=lambda s: s["precio"])
print(f"Total inventario: {total}$")
print(f"Más barato: {mas_barato['nombre']}")

# any y all
hay_sin_stock = any(s["disponible"] == 0 for s in servicios_catalogo)
todos_urnas   = all(s["cat"] == "urna" for s in servicios_catalogo)
print(f"¿Hay servicios sin disponibilidad? {hay_sin_stock}")    # True
print(f"¿Todos son urnas? {todos_urnas}")                       # False
