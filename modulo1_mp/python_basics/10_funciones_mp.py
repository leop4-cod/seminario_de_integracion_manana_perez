print('Funciones de python - Funeraria San Eterno')
print('Funcion basica')

def bienvenida():
    print('Bienvenido a la Funeraria San Eterno')

bienvenida()


print('Funcion con parametros')
def saludar_familiar(nombre):
    print(f'Estimado/a: {nombre}, lamentamos su pérdida.')

saludar_familiar('Carla')
saludar_familiar('Roberto')

print('Funcion que devuelve valor con return')
def calcular_total(costo_urna, costo_velacion):
    return costo_urna + costo_velacion

print(calcular_total(1500, 2000))

print('Funcion con valor por posicion')
def registrar_difunto(nombre, edad, causa):
    print(f'{nombre},{edad}, {causa}')
registrar_difunto('Don Carlos', 78, 'Paro cardiaco')  #por posicion
registrar_difunto(causa='Neumonía', nombre='Doña Rosa', edad=65) #por nombre

print('Funcion con valor por defecto')
def cotizar_servicio(nombre, tipo="Básico", moneda="USD"):
    print(f'Servicio {tipo} para {nombre} en {moneda}')
cotizar_servicio('Don Carlos', "Premium", "COP")  #por posicion
cotizar_servicio("Doña Rosa", moneda="EUR")
cotizar_servicio("Don Pedro", "Cremación")



print('Funcion parametros posicionales')
def sumar_costos(*args):
    print(f"costos recibidos: {args}")
    return sum(args)

print(sumar_costos(1500,2000,300))
print(sumar_costos(500,800,1200,300,200,100,50))
print(sumar_costos(2000,1500,750))


print('Funcion parametros combinados con posicional')
def mostrar_paquete(tipo_servicio,*extras):
    print(f"Paquete recibido: {tipo_servicio}, {extras}")
    print(tipo_servicio)
    for extra in extras:
        print(f"  - {extra}")
    
mostrar_paquete("Premium","flores","musica en vivo","catering","limusina")

print('Funcion parametros con clave valor variables')
def crear_ficha_difunto(**kwargs):
    print(f"datos recibidos: {kwargs}")
    for clave,valor in kwargs.items():
        print(f" {clave}: {valor}")
    
crear_ficha_difunto(nombre="Don Carlos", apellido="Ruiz", edad=78, causa="Paro cardiaco")


print("Funcion parametros combinacion de todos los tipos")
def configurar_sala(nombre_sala, *servicios, luces_tenues=True, **detalles):
    print(f"Sala: {nombre_sala}")
    print(f"Servicios: {servicios}")
    print(f"Luces tenues: {luces_tenues}")
    print(f"Detalles: {detalles}")

configurar_sala("Sala A", "flores", "musica","velas", luces_tenues=False, aforo=50, tipo="velacion")

print("Devolver multiples valores")
def rangos_costos(costos):
    return min(costos), max(costos)

minimo, maximo = rangos_costos([1500,2000,3500,800,4500])
print(f"El costo máximo es: {maximo}, el costo mínimo es: {minimo}")
_, maximo = rangos_costos([1200,1800,2600,3400,5000])
print(f"Solo el máximo: {maximo}")


print("Devolver un diccionario en el caso de muchos valores")
def analizar_ingresos(costos):
    total = sum(costos)
    n=len(costos)

    return {
        "total": total,
        "media": total/n if n >0 else 0,
        "minimo": min(costos) if costos else None,
        "maximo": max(costos) if costos else None,
        "count": n
    }
ingresos_mes = [2500,1800,3200,4500,1500,2200]
stats = analizar_ingresos(ingresos_mes)
print(f"Total: {stats['total']}")
print(f"Media: {stats['media']:.2f}")
print(f"Rango: {stats['maximo'] - stats['minimo']}")

print("funciones lambda")

def doble_costo(x):
    return x*2
doble_costo_lambda=lambda x: x*2
print(doble_costo(1500))
print(doble_costo_lambda(1500))

suma_servicios=lambda a,b: a+b
print(suma_servicios(1500,2000))
