import type { Metadata } from "next";
import "./globals.css";

import { Open_Sans } from "next/font/google";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const mf = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculadora de IMC",
  description:
    "O IMC é um calculo onde, dividindo o peso (em kg) pela altura ao quadrado (em metros), você obtém um valor, em Kg/m², que indica a proporção de massa (seu peso) para a área do seu corpo (altura), indicando possíveis graus de obesidade ou, até mesmo, magreza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${mf.className} w-screen overflow-x-hidden`}
    >
      <body className="flex flex-col min-h-screen max-w-full">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
