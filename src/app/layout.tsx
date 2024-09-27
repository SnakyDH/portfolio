import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Garcia Romero - Portafolio",
  description:
    "Daniel Garcia Romero es un desarrollador de software de Bogotá, Colombia. Con experiencia en desarrollo web y móvil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <link rel="icon" href="/images/icon.png" type="image/png" sizes="32x32" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
