/**
 * Fuente única de verdad del hub.
 *
 * Para agregar un proyecto nuevo basta con añadir un objeto a este arreglo:
 * la página, el buscador y las tarjetas se generan solos.
 */

export type AcentoProyecto = "cielo" | "violeta" | "esmeralda";
export type IconoProyecto = "calendario" | "reloj" | "portapapeles";

export type Proyecto = {
  /** Identificador estable (key de React y estado de "copiado"). */
  id: string;
  nombre: string;
  descripcion: string;
  /** URL pública del sistema. */
  href: string;
  /** Etiqueta corta del área responsable. */
  area: string;
  acento: AcentoProyecto;
  icono: IconoProyecto;
};

// URLs de producción de cada sistema.
const URL_RESERVAS = "https://reservaslabsunitec.netlify.app/";
const URL_HORAS = "https://proyecto-horas.vercel.app/";
const URL_ASISTENCIAS = "https://asistenciaslabsunitec.netlify.app/";

export const proyectos: Proyecto[] = [
  {
    id: "reservas",
    nombre: "Reservas de Laboratorios",
    descripcion:
      "Solicitud, aprobación y control de reservas de laboratorios por fecha, horario y perfil de usuario.",
    href: URL_RESERVAS,
    area: "Coordinación de laboratorios",
    acento: "cielo",
    icono: "calendario",
  },
  {
    id: "horas",
    nombre: "Control de Horas",
    descripcion:
      "Asignación de tareas con horas requeridas, carga de evidencias y seguimiento del progreso de los auxiliares.",
    href: URL_HORAS,
    area: "Gestión de auxiliares",
    acento: "violeta",
    icono: "reloj",
  },
  {
    id: "asistencias",
    nombre: "Asistencias de Laboratorios",
    descripcion:
      "Inscripción por QR, control de asistencia, notas finales y reportes en Excel para cada sección.",
    href: URL_ASISTENCIAS,
    area: "Académico",
    acento: "esmeralda",
    icono: "portapapeles",
  },
];
