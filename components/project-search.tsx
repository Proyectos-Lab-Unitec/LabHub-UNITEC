"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import type { Proyecto } from "@/lib/proyectos";

type ProjectSearchProps = {
  proyectos: Proyecto[];
};

export function ProjectSearch({ proyectos }: ProjectSearchProps) {
  const [busqueda, setBusqueda] = useState("");
  const [copiado, setCopiado] = useState<string | null>(null);
  const [mensajeCopia, setMensajeCopia] = useState("");

  const termino = busqueda.trim().toLocaleLowerCase("es-HN");

  const proyectosVisibles = useMemo(
    () =>
      proyectos.filter((proyecto) => {
        if (!termino) return true;

        return [proyecto.nombre, proyecto.descripcion, proyecto.area].some((dato) =>
          dato.toLocaleLowerCase("es-HN").includes(termino),
        );
      }),
    [proyectos, termino],
  );

  // El estado "Copiado" se revierte solo a los 2 segundos.
  useEffect(() => {
    if (!copiado) return;

    const temporizador = setTimeout(() => setCopiado(null), 2000);
    return () => clearTimeout(temporizador);
  }, [copiado]);

  async function copiarEnlace(proyecto: Proyecto) {
    try {
      const enlace = new URL(proyecto.href, window.location.href).toString();
      await navigator.clipboard.writeText(enlace);
      setCopiado(proyecto.id);
      setMensajeCopia(`Enlace de ${proyecto.nombre} copiado al portapapeles.`);
    } catch {
      setCopiado(null);
      setMensajeCopia(`No se pudo copiar el enlace de ${proyecto.nombre}.`);
    }
  }

  const textoDisponibilidad = termino
    ? `${proyectosVisibles.length} de ${proyectos.length} sistemas disponibles`
    : `${proyectos.length} sistemas disponibles`;

  return (
    <section aria-labelledby="projects-title" className="mt-16 md:mt-20">
      <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2
            className="text-[11px] font-semibold tracking-[0.22em] text-acento-claro"
            id="projects-title"
          >
            PROYECTOS
          </h2>
          <p aria-live="polite" className="mt-2 text-sm text-tenue">
            {textoDisponibilidad}
          </p>
        </div>

        <div className="relative w-full md:max-w-[25rem]">
          <label className="sr-only" htmlFor="project-search">
            Buscar proyectos por nombre, descripción o área
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 size-[17px] -translate-y-1/2 text-tenue"
            strokeWidth={1.8}
          />
          <input
            autoComplete="off"
            className="h-12 w-full rounded-xl border border-borde bg-fondo-medio/65 pr-4 pl-11 text-sm text-texto outline-none transition-colors placeholder:text-tenue/75 focus-visible:border-acento-claro focus-visible:ring-2 focus-visible:ring-acento-claro/35"
            id="project-search"
            onChange={(event) => {
              setBusqueda(event.target.value);
              setCopiado(null);
              setMensajeCopia("");
            }}
            placeholder="Buscar un proyecto..."
            type="search"
            value={busqueda}
          />
        </div>
      </div>

      {proyectosVisibles.length > 0 ? (
        <ul
          aria-label="Sistemas disponibles"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3"
        >
          {proyectosVisibles.map((proyecto) => (
            <li className="min-w-0" key={proyecto.id}>
              <ProjectCard
                copiado={copiado === proyecto.id}
                onCopiar={() => copiarEnlace(proyecto)}
                proyecto={proyecto}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="rounded-2xl border border-dashed border-borde bg-superficie/70 px-6 py-14 text-center"
          role="status"
        >
          <span className="mx-auto mb-4 flex size-11 items-center justify-center rounded-full border border-borde bg-fondo-medio/70 text-tenue">
            <Search aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </span>
          <h3 className="text-base font-semibold text-texto">No se encontraron proyectos</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-tenue">
            Prueba con otra palabra o busca por área o descripción.
          </p>
        </div>
      )}

      <p aria-atomic="true" aria-live="polite" className="sr-only">
        {mensajeCopia}
      </p>
    </section>
  );
}
