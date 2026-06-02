num_servicios=1
while (num_servicios<=5):
    print(f"Procesando servicio #{num_servicios}")
    num_servicios+=1

print("continue")
i=1
while(i<=5):
    i+=1
    if i==3:
        continue
    print(f"servicio: {i}")

print("break")
i=1
while(i<=5):
    i+=1
    if i==3:
        break
    print(f"servicio: {i}")

codigo_difunto=int(input("Ingrese el codigo del difunto (0 para salir): "))
while codigo_difunto!=0:
    print("Procesando difunto con código: ", codigo_difunto)
    codigo_difunto=int(input("Ingrese el codigo del difunto (0 para salir): "))

contador_cuerpos=1
while (contador_cuerpos<=5):
    print(f"Cuerpo en sala: {contador_cuerpos}")
    contador_cuerpos+=1
else:
    print("Todos los cuerpos han sido procesados")

contador_cuerpos=1
print
