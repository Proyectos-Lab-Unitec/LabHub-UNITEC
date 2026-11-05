import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LabHub | Laboratorios de Ingeniería - UNITEC",
  description:
    "Acceso directo a los sistemas de reservas, control de horas y asistencias del Área de Laboratorios de Ingeniería de UNITEC.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#0b2a66",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
