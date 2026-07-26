# primera-clase.py - Funeraria San Eterno

class Difunto:
    # Atributo de clase — compartido por TODAS las instancias
    funeraria = "San Eterno"

    # __init__ es el constructor — se ejecuta al crear la instancia
    def __init__(self, nombre, edad):
        # Atributos de instancia — propios de cada objeto
        self.nombre = nombre
        self.edad   = edad

    # Método de instancia — self es la referencia al objeto
    def presentar(self):
        return f"El difunto es {self.nombre}, fallecido a los {self.edad} años."

    def registrar_sala(self):
        self.sala = "Sala de espera"
        print(f"{self.nombre} ha sido registrado en la {self.sala}.")

    # __str__ — representación legible (para print y str())
    def __str__(self):
        return f"Difunto({self.nombre}, {self.edad})"

    # __repr__ — representación oficial (para depuración)
    def __repr__(self):
        return f"Difunto(nombre={self.nombre!r}, edad={self.edad!r})"

# Crear instancias (objetos) con la clase como función
carlos  = Difunto("Don Carlos Ruiz", 78)
rosa    = Difunto("Doña Rosa Mendez", 65)

print(carlos.presentar())       # El difunto es Don Carlos Ruiz, fallecido a los 78 años.
print(rosa.presentar())         # El difunto es Doña Rosa Mendez, fallecida a los 65 años.
carlos.registrar_sala()         # Don Carlos Ruiz ha sido registrado en la Sala de espera.
print(str(carlos))              # Difunto(Don Carlos Ruiz, 78)
print(repr(carlos))             # Difunto(nombre='Don Carlos Ruiz', edad=78)
print(Difunto.funeraria)        # San Eterno — atributo de clase
