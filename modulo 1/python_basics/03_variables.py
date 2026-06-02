#enteros, cadena de caracteres, booleano, none
nombre="ana garcia" #string
edad=20 #int
altura=1.65 #float
activo=True #bool
nulo=None #nonetype

print(type(nombre))
print(type(edad))
print(type(altura))
print(type(activo))
print(type(nulo))

#asignar valor varias variables en una linea
a,b,c=12,13,14
print(a)
print(b)
print(c)

a=b=c=0
print(a)
print(b)
print(c)

#intercambiar valores
x,y =10,20
print(x,y)
x,y=y,x
print(x,y)

#convenciones de nombres
nombre_completo="Leo Perez"#snake_case
nombreCompleto="Leo Perez"#NO USAR camelCase
MAX_REINTENTOS=3 #MAYUSCULA SOSTENIDA para constantes
_variable_interna="privada" #para uso interno

#manejo de enteros
pequeno=42
negativo= -17
grande=1_000_000_000
enorme=2**100

print(pequeno)
print(negativo)
print(grande)
print(enorme)

#bases numericas
binario=0b1010
octal=0o17
hexadecimal=0xFF
print(binario,octal,hexadecimal)
#convertir de decimal a otras bases
print(bin(255))
print(oct(255))
print(hex(255))