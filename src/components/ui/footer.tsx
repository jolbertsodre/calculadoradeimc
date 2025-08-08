"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const path = usePathname();
  const isLegalPage: boolean = path === "/legal" || path === "/privacy";
  const isAboutPage: boolean = path === "/about";

  return (
    <footer className="mt-16 text-white-main h-18 flex items-center justify-center bg-blue-main border-t border-sec-bg">
      <div className="max-w-[55%] w-full h-full flex flex-col items-center pb-1.5">
        <nav className="h-full flex items-center justify-between gap-6">
          {!isLegalPage && (
            <Link
              target="_blank"
              href="/contact"
              className={`link-container my-transition cursor-default ${
                isHovered ? "hover:shadow-footer-link-shadow" : ""
              }`}
            >
              <span
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="my-transition cursor-pointer hover:text-white-sec"
              >
                Contato
              </span>
            </Link>
          )}

          {!isAboutPage ? (
            <Link
              target="_blank"
              href="/about"
              className={`link-container my-transition cursor-default ${
                isHovered ? "hover:shadow-footer-link-shadow" : ""
              }`}
            >
              <span
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="my-transition cursor-pointer hover:text-white-sec"
              >
                Sobre
              </span>
            </Link>
          ) : (
            <Link
              target="_blank"
              href="/legal"
              className={`link-container my-transition cursor-default ${
                isHovered ? "hover:shadow-footer-link-shadow" : ""
              }`}
            >
              <span
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="my-transition cursor-pointer hover:text-white-sec"
              >
                Privacidade
              </span>
            </Link>
          )}

          <Link
            target="_blank"
            href="https://www.flaticon.com/br/icones-gratis/bmi"
            className={`link-container my-transition cursor-default ${
              isHovered ? "hover:shadow-footer-link-shadow" : ""
            }`}
          >
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="my-transition cursor-pointer hover:text-white-sec"
            >
              Ícone
            </span>
          </Link>
        </nav>

        <section>
          <small className="text-[1.25vh] text-dark-gray-footer">
            &copy; calculadoradeimc.vercel.app - Um produto de{" "}
            <Link
              target="_blank"
              href="#"
              className="underline"
            >
              Jolbert Sodré
            </Link>
          </small>
        </section>
      </div>
    </footer>
  );
}
