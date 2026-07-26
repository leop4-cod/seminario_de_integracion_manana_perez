print("Listas")
print("Crear listas")
vacia=[]
print(vacia)
numeros=[1,2,3,4,5,6,7]
print(numeros)
nombres=["Juan", "Pedro", "Carlos", "Maria","Petra","Juana"]
print(nombres)
mixta=[1, "Hola", "mundo", True, None, 3.4]
print(mixta)
aninada=[1,[5,5,[6,4,4]],5,7]
print(aninada)
print("Acceder a elementos de la lista")
print(nombres[0])
print(nombres[-1])
print(nombres[1:3]) 
print(nombres[::-1])

print("CRUD en listas")
frutas=["manzana","pera","melon","banana"]
#agregar
frutas.append("durazno")
print(frutas)
frutas.insert(1, "naranja")
print(frutas)
frutas.extend(["kiwi", "mango"])
#modificar
frutas[0]="toronja"
print(frutas)
#eliminar elementos
frutas.remove("banana")
print(frutas)
eliminado=frutas.pop()
print(frutas)
eliminado=frutas.pop(0)
print(frutas)
del frutas[0]
print(frutas)


print("buscar valores en los elementos de una lista")
print("kiwi" in frutas)
print(frutas.index("kiwi"))
print(frutas.count("kiwi"))

print("ordenar listas")
numeros_desordenados=[5,2,9,1,5,6,34,9,0,1,2]
print(numeros_desordenados)
numeros_desordenados.sort()
print(numeros_desordenados)
numeros_desordenados.sort(reverse=True)
print(numeros_desordenados)
ordenada=sorted(numeros_desordenados)
print(numeros_desordenados)
print(ordenada)

# lista-funcional.py

productos = [
    {"nombre": "Laptop",    "precio": 999, "stock": 5,  "cat": "tech"},
    {"nombre": "Camiseta",  "precio": 25,  "stock": 20, "cat": "ropa"},
    {"nombre": "Monitor",   "precio": 450, "stock": 3,  "cat": "tech"},
    {"nombre": "Pantalón",  "precio": 60,  "stock": 8,  "cat": "ropa"},
    {"nombre": "Teclado",   "precio": 79,  "stock": 0,  "cat": "tech"},
]

# map — transforma cada elemento
precios     = list(map(lambda p: p["precio"], productos))
nombres     = list(map(lambda p: p["nombre"].upper(), productos))
print(precios)   # [999, 25, 450, 60, 79]

# filter — filtra elementos
con_stock   = list(filter(lambda p: p["stock"] > 0, productos))
tech        = list(filter(lambda p: p["cat"] == "tech", productos))
print([p["nombre"] for p in con_stock])

# sorted con key
por_precio  = sorted(productos, key=lambda p: p["precio"])
mas_caro    = sorted(productos, key=lambda p: p["precio"], reverse=True)[0]
print(f"Más caro: {mas_caro['nombre']} ({mas_caro['precio']}€)")

# sum, min, max con key
total       = sum(p["precio"] * p["stock"] for p in productos)
mas_barato  = min(productos, key=lambda p: p["precio"])
print(f"Total inventario: {total}€")
print(f"Más barato: {mas_barato['nombre']}")

# any y all
hay_sin_stock = any(p["stock"] == 0 for p in productos)
todos_tech    = all(p["cat"] == "tech" for p in productos)
print(f"¿Hay sin stock? {hay_sin_stock}")    # True
print(f"¿Todos son tech? {todos_tech}")     # False