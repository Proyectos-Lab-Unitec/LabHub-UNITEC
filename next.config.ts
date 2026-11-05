import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tailwind 4 se procesa con el loader nativo de Turbopack (Next 16), igual
  // que en Asistencias_Laboratorios. Sin postcss.config, todo el CSS pasa por aquí.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
