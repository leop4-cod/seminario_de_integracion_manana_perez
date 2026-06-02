# diccionarios.py - Funeraria San Eterno

# Crear diccionarios
vacio    = {}
difunto  = {"nombre": "Don Carlos", "edad": 78, "ciudad": "Quito"}
config   = dict(sala="Capilla A", capacidad=30, luces_tenues=True)

# Acceso
print(difunto["nombre"])              # Don Carlos
print(difunto.get("causa_muerte"))    # None — no lanza error si no existe
print(difunto.get("causa_muerte", "No especificada"))    # No especificada — valor por defecto

# Modificar
difunto["causa_muerte"]  = "Paro cardiaco"  # añadir/modificar
difunto["edad"]          = 79               # modificar
del difunto["ciudad"]                       # eliminar
valor = difunto.pop("causa_muerte")        # eliminar y obtener el valor
print(difunto)

# Verificar existencia
print("nombre" in difunto)            # True
print("ciudad" in difunto)            # False

# Métodos esenciales
print(difunto.keys())    # dict_keys(['nombre', 'edad'])
print(difunto.values())  # dict_values(['Don Carlos', 79])
print(difunto.items())   # dict_items([('nombre', 'Don Carlos'), ('edad', 79)])

# Iterar
for clave, valor in difunto.items():
    print(f"  {clave}: {valor}")

# update — fusionar diccionarios
difunto.update({"ciudad": "Guayaquil", "telefono_familiar": "0991234567"})
print(difunto)

# Fusionar con | (Python 3.9+)
extra  = {"tipo_servicio": "Cremacion", "pagado": True}
ficha_completa = difunto | extra
print(ficha_completa)

# Diccionarios anidados — estructura de la funeraria
funeraria = {
    "nombre": "Funeraria San Eterno",
    "difuntos": {
        1: {"nombre": "Don Carlos", "sala": "Capilla A"},
        2: {"nombre": "Doña Rosa",  "sala": "Capilla B"},
    },
    "sedes": ["Quito", "Guayaquil"]
}

print(funeraria["difuntos"][1]["nombre"])   # Don Carlos
funeraria["difuntos"][3] = {"nombre": "Don Pedro", "sala": "Capilla C"}

# setdefault — añadir solo si no existe
difunto.setdefault("pais", "Ecuador")       # añade "pais"
difunto.setdefault("nombre", "Otro")        # no modifica — ya existe
