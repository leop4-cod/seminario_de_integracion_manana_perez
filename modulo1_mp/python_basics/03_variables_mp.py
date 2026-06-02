#enteros, cadena de caracteres, booleano, none
nombre_difunto="juan perez" #string
edad_fallecimiento=75 #int
costo_servicio=2500.50 #float
servicio_activo=True #bool
causa_muerte=None #nonetype

print(type(nombre_difunto))
print(type(edad_fallecimiento))
print(type(costo_servicio))
print(type(servicio_activo))
print(type(causa_muerte))

#asignar valor varias variables en una linea
urna,capilla,velacion=1,2,3
print(urna)
print(capilla)
print(velacion)

urna=capilla=velacion=0
print(urna)
print(capilla)
print(velacion)

#intercambiar valores
precio_basico,precio_premium=1500,4500
print(precio_basico, precio_premium)
precio_basico, precio_premium = precio_premium, precio_basico
print(precio_basico, precio_premium)

#convenciones de nombres
nombre_completo_difunto="Carlos Ruiz"#snake_case
nombreCompletoDifunto="Carlos Ruiz"#NO USAR camelCase
MAX_CAPACIDAD_SALA=50 #MAYUSCULA SOSTENIDA para constantes
_registro_interno="confidencial" #para uso interno

#manejo de enteros
num_servicios=42
saldo_negativo= -17
codigo_gran_funeraria=1_000_000_000
capacidad_enorme=2**100

print(num_servicios)
print(saldo_negativo)
print(codigo_gran_funeraria)
print(capacidad_enorme)

#bases numericas
binario=0b1010
octal=0o17
hexadecimal=0xFF
print(binario,octal,hexadecimal)
#convertir de decimal a otras bases
print(bin(255))
print(oct(255))
print(hex(255))
