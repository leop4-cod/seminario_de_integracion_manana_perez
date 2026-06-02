# herencia.py - Funeraria San Eterno

class ServicioBase:
    def __init__(self, nombre, tipo_servicio, año):
        self.nombre         = nombre
        self.tipo_servicio  = tipo_servicio
        self.año            = año
        self._costo         = 0    # _ → convención "protegido"

    def agregar_costo(self, monto):
        self._costo += monto
        return self

    def aplicar_descuento(self, monto):
        self._costo = max(0, self._costo - monto)
        return self

    def __str__(self):
        return f"{self.nombre} | {self.tipo_servicio} ({self.año}) — Total: ${self._costo}"

class Velacion(ServicioBase):
    def __init__(self, nombre, tipo_servicio, año, num_dias=1):
        super().__init__(nombre, tipo_servicio, año)   # llama al constructor del padre
        self.num_dias = num_dias

    def encender_velas(self):
        return f"Velas encendidas para la velación de {self.nombre}"

    def __str__(self):
        return f"{super().__str__()} ({self.num_dias} día(s))"

class Cremacion(ServicioBase):
    def __init__(self, nombre, tipo_servicio, año, temperatura_horno):
        super().__init__(nombre, tipo_servicio, año)
        self.temperatura_horno = temperatura_horno

    def iniciar_cremacion(self):
        return f"🔥 Iniciando cremación de {self.nombre} a {self.temperatura_horno}°C"

    def __str__(self):
        return f"{super().__str__()} ({self.temperatura_horno}°C)"

class VelacionPremium(Velacion):
    def __init__(self, nombre, tipo_servicio, año, flores_arreglos):
        super().__init__(nombre, tipo_servicio, año)
        self.__flores_arreglos = flores_arreglos
        self.__estado_flores   = "frescas"

    def renovar_flores(self, porcentaje=100):
        self.__estado_flores = "renovadas" if porcentaje == 100 else "parcialmente renovadas"
        return self

    @property
    def estado_arreglos(self):
        return f"{self.__flores_arreglos} arreglos ({self.__estado_flores})"

    def __str__(self):
        return (f"{super().__str__()} | "
                f"Flores: {self.__flores_arreglos} arreglos | "
                f"Estado: {self.__estado_flores}")

# Herencia — cada objeto es también de todos sus tipos padre
velacion_vip = VelacionPremium("Don Carlos Ruiz", "Premium", 2024, 15)
velacion_vip.agregar_costo(3500)
print(velacion_vip)

print(isinstance(velacion_vip, VelacionPremium))  # True
print(isinstance(velacion_vip, Velacion))          # True — herencia
print(isinstance(velacion_vip, ServicioBase))      # True — herencia transitiva
print(isinstance(velacion_vip, Cremacion))         # False

# MRO — Method Resolution Order
print(VelacionPremium.__mro__)
