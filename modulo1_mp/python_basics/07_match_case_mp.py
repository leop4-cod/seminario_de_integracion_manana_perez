print("Match case - Funeraria San Eterno")
tipo_servicio=input("Tipo de servicio (basico/premium/cremacion): ")
match tipo_servicio:
    case "basico":
        print("Servicio básico asignado: $1500")
    case "premium":
        print("Servicio premium asignado: $4500")
    case "cremacion":
        print("Servicio de cremación asignado: $2000")
    case _:
        print(f"Servicio '{tipo_servicio}' no disponible en nuestra funeraria")

print("Match condiciones - Clasificación por edad del difunto")
edad_difunto=85
match edad_difunto:
    case n if n<0:
        print(f"Edad inválida: {n}")
    case 0:
        print("Neonato fallecido")
    case n if n % 2 == 0:
        print(f"Fallecido de {n} años (edad par)")
    case n:
        print(f"Fallecido de {n} años")
