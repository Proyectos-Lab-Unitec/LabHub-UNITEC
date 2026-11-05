import Image from "next/image";
import { ProjectSearch } from "@/components/project-search";
import { proyectos } from "@/lib/proyectos";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-fondo">
      <section className="relative overflow-hidden bg-acento text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 85% 0%, rgba(29,91,216,0.55), transparent 60%), radial-gradient(50% 70% at 10% 100%, rgba(15,61,145,0.8), transparent 65%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
              <Image
                alt="UNITEC"
                className="h-[26px] w-auto"
                height={26}
                priority
                src="/unitec-logo.png"
                width={26}
              />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-tight tracking-[-0.01em]">
                Lab Hub
              </p>
              <p className="truncate text-[11px] text-blue-200">
                Laboratorios de Ingeniería
              </p>
            </div>
            <span className="ml-auto shrink-0 rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-medium tracking-[0.1em] text-blue-100 uppercase">
              UNITEC · 2026
            </span>
          </div>

          <div className="mt-12 max-w-3xl sm:mt-14">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-blue-200 uppercase">
              Portal institucional
            </p>
            <h1 className="mt-5 text-4xl leading-[1.06] font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Sistemas del laboratorio, en un solo lugar.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Acceso directo a las herramientas de reservas, control de horas y
              asistencias del Área de Laboratorios de Ingeniería.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
        <ProjectSearch proyectos={proyectos} />
      </main>

      <footer className="border-t border-borde">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-tenue sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Área de Laboratorios de Ingeniería · UNITEC</p>
          <p>Acceso directo a los sistemas</p>
        </div>
      </footer>
    </div>
  );
}
