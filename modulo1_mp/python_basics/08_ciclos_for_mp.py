print("Ciclo for - Funeraria San Eterno")
servicios=["velacion","entierro","cremacion","traslado",]
for servicio in servicios:
    print(servicio)
print("Recorrer nombre de difunto letra por letra")
for letra in "funeraria":
    print(letra)

print("Recorrer rango de dias de servicio")
for dia in range(1,10,2):
    print(dia)

print("Enumerar lista de servicios")
for i in enumerate(servicios):
    print(i)

print("Dos listas a la vez")
difuntos=["Don Carlos","Doña Rosa","Don Pedro",]
edades=[78,65,90]
for difunto,edad in zip(difuntos,edades):
    print(difunto,edad)

print("Control del Ciclo")
print("Break")
for i in range(5):
    if i==6:
        break
    print(i)
print("Continue")
for i in range(5):
    if i==2:
        continue
    print(i)

print("For anidado - salas y dias")
for sala in range(3):
    for dia in range(2):
        print(sala,dia)
print("Lista comprehension - costos de servicios")
costos_base=100
costos=[costos_base*x for x in range(1,6)]
print(costos)
