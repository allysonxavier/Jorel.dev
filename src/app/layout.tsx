import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surpresa Fofa",
  description: "Uma surpresa especial para você",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
