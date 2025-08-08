"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const path = usePathname();
  const isLegalPage: boolean = path === "/legal" || path === "/privacy";
  const isAboutPage: boolean = path === "/about";

  return (
    <header className="text-white-main mb-10 h-20 flex items-center justify-center bg-blue-main border-b border-blue-sec">
      <div className="max-w-264 w-full h-full flex items-center justify-between pr-14">
        <section className="h-full flex flex-grow items-center gap-4 px-2">
          <Link
            target="_blank"
            href="/"
          >
            <Image
              priority
              src="/imc-calculator-icon.svg"
              width={48}
              height={48}
              alt="Isologo do Projeto Calculadora de IMC, por juicy_fish."
            />
          </Link>

          <Link
            target="_blank"
            href="/"
          >
            <h1 className="text-xl font-bold">Calculadora de IMC</h1>
          </Link>
        </section>

        <section className="h-full">
          {!isLegalPage && !isAboutPage ? (
            <section className="h-full">
              <Link
                target="_blank"
                href="/legal"
                className={`my-transition flex items-center h-full cursor-default ${
                  isHovered ? "hover:shadow-header-link-shadow" : ""
                }`}
              >
                <h2
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="my-transition text-base font-semibold cursor-pointer hover:text-white-sec"
                >
                  Privacidade
                </h2>
              </Link>
            </section>
          ) : (
            <section className="h-full flex gap-6">
              <Link
                target="_blank"
                href="/"
                className={`my-transition flex items-center h-full cursor-default ${
                  isHovered ? "hover:shadow-header-link-shadow" : ""
                }`}
              >
                <h2
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="my-transition text-base font-semibold cursor-pointer hover:text-white-sec"
                >
                  Página Principal
                </h2>
              </Link>

              {!isAboutPage && (
                <Link
                  target="_blank"
                  href="/contact"
                  className={`my-transition flex items-center h-full cursor-default ${
                    isHovered ? "hover:shadow-header-link-shadow" : ""
                  }`}
                >
                  <h2
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="my-transition text-base font-semibold cursor-pointer hover:text-white-sec"
                  >
                    Contato
                  </h2>
                </Link>
              )}
            </section>
          )}
        </section>
      </div>
    </header>
  );
}
