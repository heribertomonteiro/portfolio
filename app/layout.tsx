import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Heriberto Monteiro - Portfólio",
  description: "Portfólio de Heriberto Monteiro, desenvolvedor Full Stack júnior especializado em React, Next.js, Tailwind e TypeScript no front-end e em APIs/microserviços no back-end com Node.js (NestJS/Express) e Django (Django REST Framework), usando PostgreSQL, Redis, Docker além de integrações REST, webhooks e automações. Confira meus projetos, habilidades e experiência profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Header />
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
        </TooltipProvider>
      </body>
    </html>
  );
}
