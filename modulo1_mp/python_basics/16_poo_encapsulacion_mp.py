# encapsulamiento.py - Funeraria San Eterno

class RegistroDifunto:
    def __init__(self, nombre, costo_inicial=0):
        self.nombre          = nombre
        self.__costo         = costo_inicial      # __ → privado (name mangling)
        self.__historial     = []
        self.__activo        = True
        self.__registrar(f"Difunto registrado con costo inicial ${costo_inicial}")

    # Property — getter (acceso como atributo, no como método)
    @property
    def costo(self):
        return self.__costo

    @property
    def activo(self):
        return self.__activo

    @property
    def historial(self):
        return list(self.__historial)   # devuelve copia, no referencia

    # Método público — la "ventanilla"
    def agregar_servicio(self, costo_servicio):
        if costo_servicio <= 0:
            raise ValueError("El costo del servicio debe ser positivo")
        self.__costo += costo_servicio
        self.__registrar(f"Servicio agregado: +${costo_servicio}")
        return self

    def aplicar_descuento(self, descuento):
        if descuento <= 0:
            raise ValueError("El descuento debe ser positivo")
        if descuento > self.__costo:
            raise ValueError(f"Descuento mayor al costo actual (disponible: ${self.__costo})")
        self.__costo -= descuento
        self.__registrar(f"Descuento aplicado: -${descuento}")
        return self

    def transferir_sala(self, otra_sala, costo_traslado):
        self.aplicar_descuento(costo_traslado)
        otra_sala.agregar_servicio(costo_traslado)
        self.__registrar(f"Traslado a sala de {otra_sala.nombre}: -${costo_traslado}")
        return self

    # Método privado — solo para uso interno
    def __registrar(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__historial.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"Difunto({self.nombre}: ${self.__costo})"

# Uso
difunto1 = RegistroDifunto("Don Carlos Ruiz", 2000)
difunto2 = RegistroDifunto("Doña Rosa Mendez", 1500)

difunto1.agregar_servicio(800).aplicar_descuento(200)   # encadenamiento
difunto1.transferir_sala(difunto2, 300)

print(difunto1)    # Difunto(Don Carlos Ruiz: $2300)
print(difunto2)    # Difunto(Doña Rosa Mendez: $1800)
print(f"Costo Don Carlos: ${difunto1.costo}")   # acceso como atributo (property)

# difunto1.__costo = 99999  # AttributeError — acceso directo denegado
# difunto1.costo = 99999    # AttributeError — no hay setter

for entrada in difunto1.historial:
    print(f"  {entrada}")
