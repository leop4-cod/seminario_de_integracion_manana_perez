print("Condicionales simples")
edad_difunto=input("Ingrese la edad del fallecido: ")
if (int(edad_difunto)>=60):
    print("Fallecido de la tercera edad")

print("Condicionales dos caminos")
presupuesto=input("Ingrese el presupuesto disponible (en dolares): ")
if (int(presupuesto)>=3000):
    print("Puede acceder al servicio premium")
else:
    print("Se asigna el servicio básico")

print("Condicionales if anidados")
tiene_contrato=True
pago_adelantado=2500
tipo_servicio="cremacion"
if (tiene_contrato):
    if (pago_adelantado>=2000):
        if tipo_servicio=="cremacion":
            print("Cremación confirmada. Costo: $2000. Servicio aprobado.")
        else:
            print("Servicio de entierro disponible")
    else:
        print("Fondos insuficientes para el servicio")
else:
    print("No tiene contrato vigente con la funeraria")
