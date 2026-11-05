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
import type { IconoProyecto, Proyecto } from "@/lib/proyectos";

type ProjectCardProps = {
  proyecto: Proyecto;
  copiado: boolean;
  onCopiar: () => void;
};

const iconos: Record<IconoProyecto, LucideIcon> = {
  calendario: CalendarDays,
  reloj: Clock3,
  portapapeles: ClipboardCheck,
};

export function ProjectCard({ proyecto, copiado, onCopiar }: ProjectCardProps) {
  const Icono = iconos[proyecto.icono];

  return (
    <div
      className="project-card-item relative h-full min-w-0"
      data-copied={copiado ? "true" : undefined}
    >
      <a
        aria-label={`Abrir ${proyecto.nombre} en una pestaña nueva`}
        className="project-card group/card flex h-full min-h-[320px] flex-col rounded-2xl border border-borde bg-superficie p-5 focus-visible:outline-none sm:p-6"
        data-accent={proyecto.acento}
        href={proyecto.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* Se reserva el ancho del botón "Copiar" para que no se solapen. */}
        <div className="flex items-start justify-between gap-4 pr-24">
          <span className="project-card__icon flex size-12 shrink-0 items-center justify-center rounded-xl border">
            <Icono aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </span>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold tracking-[-0.025em] text-texto">
            {proyecto.nombre}
          </h3>
          <p className="mt-3 min-h-[72px] text-sm leading-6 text-tenue">
            {proyecto.descripcion}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-borde/80 pt-4">
          <span className="flex min-w-0 items-center gap-2 text-xs text-tenue">
            <Building2 aria-hidden="true" className="size-3.5 shrink-0" />
            <span className="truncate">{proyecto.area}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-acento-claro">
            Abrir
            <ArrowUpRight
              aria-hidden="true"
              className="project-card__arrow size-4 transition-transform duration-300 group-hover/card:translate-x-0.5"
            />
          </span>
        </div>
        <span className="sr-only">Se abre en una pestaña nueva.</span>
      </a>

      <button
        aria-label={`Copiar enlace de ${proyecto.nombre}`}
        className="project-card__copy absolute right-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-lg border border-borde bg-fondo-medio px-2.5 py-1.5 text-xs font-medium text-tenue transition-colors hover:border-acento-claro hover:text-texto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento-claro sm:right-6 sm:top-6"
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
