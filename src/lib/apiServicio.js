const API_URL =
  import.meta.env.VITE_API_URL || "https://crm.grupoautomotrizryr.com";
// const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function limpiarTexto(valor) {
  return String(valor ?? "").trim();
}

function convertirNumero(valor) {
  const numero = Number(valor);
  return Number.isFinite(numero) ? numero : 0;
}

function obtenerMensajeError(data) {
  if (!data) {
    return "No se pudo guardar la encuesta en el servidor.";
  }

  if (typeof data.detail === "string" && data.detail.trim()) {
    return data.detail;
  }

  if (typeof data.message === "string" && data.message.trim()) {
    return data.message;
  }

  if (typeof data === "object") {
    for (const valor of Object.values(data)) {
      if (Array.isArray(valor) && valor.length > 0) {
        return String(valor[0]);
      }

      if (typeof valor === "string" && valor.trim()) {
        return valor;
      }
    }
  }

  return "No se pudo guardar la encuesta en el servidor.";
}

export async function crearEncuestaServicio(respuestas) {
  const payload = {
    agencia: "VW Tuxtepec",
    nombre_OS_cliente: limpiarTexto(respuestas.nombre),
    asesor_atendio: limpiarTexto(respuestas.asesor),
    satisfaccion_agenda_cita: limpiarTexto(respuestas.agendaCita),
    satisfaccion_atencion_asesor: convertirNumero(respuestas.atencionAsesor),
    percepcion_calidad_precio: convertirNumero(respuestas.calidadPrecio),
    satisfaccion_servicio_ryr: convertirNumero(respuestas.satisfaccionServicio),
    comentario: limpiarTexto(respuestas.comentario),
  };

  const respuesta = await fetch(API_URL + "/api/public/encuestas/servicio/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data = null;

  try {
    data = await respuesta.json();
  } catch (error) {
    data = null;
  }

  if (!respuesta.ok) {
    throw new Error(obtenerMensajeError(data));
  }

  return data;
}
