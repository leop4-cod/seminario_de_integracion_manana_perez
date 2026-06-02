# polimorfismo.py - Funeraria San Eterno

# POLIMORFISMO POR HERENCIA — override de métodos
class Notificacion:
    """Clase base abstracta para notificaciones de la funeraria."""
    def __init__(self, destinatario, mensaje):
        self.destinatario = destinatario
        self.mensaje      = mensaje

    def enviar(self):
        raise NotImplementedError("Las subclases deben implementar enviar()")

    def __str__(self):
        return f"{self.__class__.__name__} → {self.destinatario}"

class NotificacionEmail(Notificacion):
    def __init__(self, destinatario, mensaje, asunto="Aviso de Funeraria San Eterno"):
        super().__init__(destinatario, mensaje)
        self.asunto = asunto

    def enviar(self):
        return f"📧 Email a {self.destinatario}: [{self.asunto}] {self.mensaje}"

class NotificacionSMS(Notificacion):
    MAX_CHARS = 160

    def enviar(self):
        msg = self.mensaje[:self.MAX_CHARS]
        return f"📱 SMS a {self.destinatario}: {msg}"

class NotificacionWhatsApp(Notificacion):
    def enviar(self):
        return f"💬 WhatsApp a {self.destinatario}: {self.mensaje[:80]}..."

class NotificacionFamiliar(Notificacion):
    def __init__(self, nombre_familiar, mensaje):
        super().__init__(nombre_familiar, mensaje)

    def enviar(self):
        return f"🖤 Notificación familiar a {self.destinatario}: {self.mensaje}"

# Polimorfismo en acción — misma función, distintos tipos
def notificar_todos(notificaciones: list):
    for notif in notificaciones:
        print(f"  {notif.enviar()}")   # cada uno envía a su manera

avisos = [
    NotificacionEmail("familia@email.com", "El servicio de velación comenzará a las 18:00", "Aviso de Velación"),
    NotificacionSMS("0991234567",          "Su familiar está siendo atendido en Funeraria San Eterno"),
    NotificacionWhatsApp("0987654321",     "Le recordamos el horario de visita: 14:00 - 18:00"),
    NotificacionFamiliar("Los Ruiz",       "El cuerpo de Don Carlos ha sido preparado y está en Capilla A"),
]

print("Enviando notificaciones de la funeraria:")
notificar_todos(avisos)

# POLIMORFISMO DUCK TYPING — sin herencia
# "Si camina como un pato y grazna como un pato, es un pato"
class RegistroLocal:
    def leer(self):   return "datos desde archivo local de difuntos"
    def escribir(self, datos): print(f"Guardando en disco: {datos[:40]}...")

class RegistroNube:
    def leer(self):   return "datos desde la nube de la funeraria"
    def escribir(self, datos): print(f"Subiendo a la nube: {datos[:40]}...")

class RegistroBD:
    def leer(self):   return "datos desde base de datos de difuntos"
    def escribir(self, datos): print(f"Insertando en BD de funeraria: {datos[:40]}...")

# Esta función funciona con CUALQUIER objeto que tenga leer() y escribir()
def procesar_registro(registro):
    contenido = registro.leer()
    print(f"Procesando: {contenido}")
    registro.escribir(f"registro_actualizado_{contenido}")

for registro in [RegistroLocal(), RegistroNube(), RegistroBD()]:
    procesar_registro(registro)
