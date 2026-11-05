import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  Check,
  ClipboardCheck,
  Clock3,
  Copy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AcentoProyecto, IconoProyecto, Proyecto } from "@/lib/proyectos";

type ProjectCardProps = {
  proyecto: Proyecto;
  copiado: boolean;
  destacado: boolean;
  /** Bloque a todo el ancho: en desktop pasa a layout horizontal. */
  ancha?: boolean;
  onCopiar: () => void;
};

const iconos: Record<IconoProyecto, LucideIcon> = {
  calendario: CalendarDays,
  reloj: Clock3,
  portapapeles: ClipboardCheck,
};

const colorAcento: Record<AcentoProyecto, string> = {
  cielo: "#2563eb",
  violeta: "#7c3aed",
  esmeralda: "#059669",
};

export function ProjectCard({
  proyecto,
  copiado,
  destacado,
  ancha = false,
  onCopiar,
}: ProjectCardProps) {
  const Icono = iconos[proyecto.icono];

  return (
    <div
      className="project-card-item group/item relative h-full min-w-0"
      data-copied={copiado ? "true" : undefined}
    >
      <a
        aria-label={`Abrir ${proyecto.nombre} en una pestaña nueva`}
        className={`project-card group/card flex h-full min-h-[250px] flex-col rounded-[28px] border border-borde border-t-4 bg-gradient-to-br from-white to-[#eef3fb] p-6 focus-visible:outline-none sm:p-7 ${
          destacado || ancha ? "sm:p-8" : ""
        } ${ancha ? "md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10" : ""}`}
        data-accent={proyecto.acento}
        href={proyecto.href}
        rel="noopener noreferrer"
        style={{ borderTopColor: colorAcento[proyecto.acento] }}
        target="_blank"
      >
        {/* Se reserva el ancho del botón "Copiar" para que no se solapen. */}
        <div
          className={
            ancha ? "contents md:flex md:items-start md:gap-5" : "contents"
          }
        >
          <div className={`flex items-start justify-between gap-4 ${ancha ? "" : "pr-20"}`}>
            <span className="project-card__icon flex size-12 shrink-0 items-center justify-center rounded-2xl border">
              <Icono aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </span>
          </div>

          <div className={ancha ? "contents md:block md:min-w-0" : "contents"}>
            <h3
              className={`mt-6 font-semibold tracking-[-0.03em] text-texto ${
                destacado || ancha ? "text-2xl sm:text-3xl" : "text-xl"
              } ${ancha ? "md:mt-0" : ""}`}
            >
              {proyecto.nombre}
            </h3>
            <p
              className={`mt-3 max-w-xl text-sm leading-6 text-tenue ${
                destacado ? "sm:text-[15px]" : ""
              } ${ancha ? "md:mt-2" : ""}`}
            >
              {proyecto.descripcion}
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col gap-3 border-t border-borde/80 pt-4 sm:flex-row sm:items-center sm:justify-between ${
            ancha
              ? "mt-auto md:mt-0 md:flex-col md:items-end md:gap-3 md:border-0 md:pt-0"
              : "mt-auto"
          }`}
        >
          <span className="flex min-w-0 items-center gap-1.5 text-[11px] text-tenue">
            <Building2 aria-hidden="true" className="size-3.5 shrink-0" />
            <span className="truncate">{proyecto.area}</span>
          </span>
          <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-acento px-3.5 py-2 text-xs font-semibold text-white transition-colors group-hover/card:bg-acento-claro">
            Abrir sistema
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </span>
        </div>
        <span className="sr-only">Se abre en una pestaña nueva.</span>
      </a>

      <button
        aria-label={`Copiar enlace de ${proyecto.nombre}`}
        className="project-card__copy absolute top-5 right-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-borde bg-white px-2.5 py-1.5 text-xs font-medium text-tenue transition duration-300 group-hover/item:-translate-y-1 hover:border-acento hover:text-texto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento-claro motion-reduce:transition-none motion-reduce:group-hover/item:translate-y-0 sm:top-6 sm:right-6"
        onClick={onCopiar}
        title="Copiar enlace"
        type="button"
      >
        <Copy aria-hidden="true" className="project-card__copy-icon size-3.5" />
        <Check aria-hidden="true" className="project-card__copy-success-icon size-3.5" />
        <span className="project-card__copy-label">Copiar</span>
        <span className="project-card__copy-success">Copiado</span>
      </button>
    </div>
  );
}
