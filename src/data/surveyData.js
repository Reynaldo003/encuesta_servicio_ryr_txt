export const asesores = ["Yamil Temple", "Ivan Ramirez", "Verónica González"];

export const motivos = [
  "Muy satisfecho",
  "Satisfecho",
  "Regular",
  "Insatisfecho",
  "Muy insatisfecho",
];

export const opcionesCalificacion = [
  {
    value: 1,
    emoji: "😕",
    titulo: "Muy mala",
    descripcion: "No fue una buena experiencia",
  },
  {
    value: 2,
    emoji: "😐",
    titulo: "Mala",
    descripcion: "Hubo varios puntos por mejorar",
  },
  {
    value: 3,
    emoji: "🙂",
    titulo: "Regular",
    descripcion: "Aceptable, pero puede mejorar",
  },
  {
    value: 4,
    emoji: "😄",
    titulo: "Muy buena",
    descripcion: "Me sentí bien atendido",
  },
  {
    value: 5,
    emoji: "🤩",
    titulo: "Excelente",
    descripcion: "Superó mis expectativas",
  },
];

export const pasos = [
  {
    id: "nombre",
    tipo: "texto",
    etiqueta: "Nombre / O.S.",
    titulo: "¿Cómo le gustaría identificarse?",
    placeholder: "Escriba su nombre u orden de servicio",
  },
  {
    id: "asesor",
    tipo: "asesor",
    etiqueta: "Asesor",
    titulo: "¿Qué asesor le atendió?",
  },
  {
    id: "agendaCita",
    tipo: "calificacion",
    etiqueta: "Agenda de cita",
    titulo: "¿Qué tan satisfecho está con la forma en la cual agendó su cita?",
  },
  {
    id: "atencionAsesor",
    tipo: "calificacion",
    etiqueta: "Atención del asesor",
    titulo:
      "¿Qué tan satisfecho se encuentra con el trato y seguimiento que le ha brindado su Asesor de Servicio?",
  },
  {
    id: "calidadPrecio",
    tipo: "calificacion",
    etiqueta: "Calidad / precio",
    titulo:
      "Califique su percepción del precio final con respecto a la calidad del servicio que se le proporcionó",
  },
  {
    id: "satisfaccionServicio",
    tipo: "calificacion",
    etiqueta: "Satisfacción general",
    titulo:
      "En general, ¿qué tan satisfecho se encuentra con el servicio que se le proporcionó en Automotriz R&R?",
  },
  {
    id: "comentario",
    tipo: "comentario",
    etiqueta: "Comentario",
    titulo:
      "¿Algún comentario que guste hacer sobre su experiencia en servicio en Automotriz R&R?",
    placeholder: "Escriba aquí su comentario...",
  },
];
