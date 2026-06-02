# abstraccion.py - Funeraria San Eterno
from abc import ABC, abstractmethod

# ABC (Abstract Base Class) — clase abstracta que no puede instanciarse
class ServicioFunerario(ABC):
    def __init__(self, tipo="basico"):
        self.tipo = tipo

    # Método abstracto — CADA subclase DEBE implementarlo
    @abstractmethod
    def calcular_costo(self) -> float:
        pass

    @abstractmethod
    def duracion_dias(self) -> int:
        pass

    # Método concreto — compartido por todos los servicios
    def describir(self) -> str:
        return (f"{self.__class__.__name__} [{self.tipo}]: "
                f"costo=${self.calcular_costo():.2f}, duración={self.duracion_dias()} día(s)")

# ServicioFunerario()  # TypeError — no puede instanciarse

class Velacion(ServicioFunerario):
    def __init__(self, num_dias, tipo="basico"):
        super().__init__(tipo)
        self.num_dias = num_dias

    def calcular_costo(self):
        tarifa = 500 if self.tipo == "basico" else 1200
        return tarifa * self.num_dias

    def duracion_dias(self):
        return self.num_dias

class Cremacion(ServicioFunerario):
    def __init__(self, con_urna=False, tipo="basico"):
        super().__init__(tipo)
        self.con_urna = con_urna

    def calcular_costo(self):
        base = 1800 if self.tipo == "basico" else 3500
        return base + (800 if self.con_urna else 0)

    def duracion_dias(self):
        return 1

class Entierro(ServicioFunerario):
    def __init__(self, distancia_km, tipo="basico"):
        super().__init__(tipo)
        self.distancia_km = distancia_km

    def calcular_costo(self):
        base = 2000 if self.tipo == "basico" else 4000
        return base + (self.distancia_km * 2)

    def duracion_dias(self):
        return 2

# Polimorfismo — mismo código para cualquier ServicioFunerario
servicios = [Velacion(3, "premium"), Cremacion(con_urna=True, tipo="basico"), Entierro(20, "premium")]

for servicio in servicios:
    print(servicio.describir())

costo_total = sum(s.calcular_costo() for s in servicios)
print(f"Costo total de servicios: ${costo_total:.2f}")
