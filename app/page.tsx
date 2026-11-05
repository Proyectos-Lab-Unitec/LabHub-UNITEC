import Image from "next/image";
import { ProjectSearch } from "@/components/project-search";
import { proyectos } from "@/lib/proyectos";

export default function Page() {
  return (
    <div className="page-shell flex min-h-screen flex-col">
      <header className="border-b border-borde/70 bg-fondo/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-acento to-fondo-medio ring-1 ring-acento-claro/30">
              <Image
                alt="UNITEC"
                className="h-[26px] w-auto"
                height={26}
                priority
                src="/unitec-logo.png"
                width={26}
              />
            </div>
            <div className="min-w-0">
              <p className="text-base font-semibold leading-tight tracking-[-0.02em] text-texto">
                Lab Hub
              </p>
              <p className="mt-0.5 truncate text-[11px] leading-tight text-tenue sm:text-xs">
                Laboratorios de Ingeniería
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-borde bg-fondo-medio/70 px-2.5 py-1.5 text-[10px] font-medium tracking-[0.08em] text-tenue sm:px-3 sm:text-[11px]">
            UNITEC · 2026
          </span>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-16 pt-16 sm:px-6 md:pt-24 lg:px-8">
        <section aria-labelledby="hero-title">
          <h1
            className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.055em] text-texto sm:text-5xl lg:text-6xl"
            id="hero-title"
          >
            {"Acceso directo a los "}
            <span className="text-acento-claro sm:whitespace-nowrap">
              proyectos del área.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-tenue sm:text-lg sm:leading-8">
            Reservas, control de horas y asistencias de laboratorio. Elige un sistema para abrirlo
            en una pestaña nueva.
          </p>
        </section>

        <ProjectSearch proyectos={proyectos} />
      </main>

      <footer className="relative z-10 border-t border-borde/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-tenue sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Área de Laboratorios de Ingeniería · UNITEC</p>
        </div>
      </footer>
    </div>
  );
}
