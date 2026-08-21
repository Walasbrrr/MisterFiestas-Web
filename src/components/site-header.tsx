"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Menu,
  MessageCircle,
  ShoppingBag,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { mainNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="Mister Fiestas, inicio"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/mister-fiestas-logo.jpeg"
            alt=""
            width={40}
            height={40}
            priority
          />
          <span>
            Mister <em>Fiestas</em>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {mainNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(active && "nav-active")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          {/* Theme switch button */}
          <ThemeToggle />

          {/* Quick quote / bag icon for mobile & desktop */}
          <Link
            className={cn(
              "header-bag-btn",
              pathname === "/cotizar" && "is-active",
            )}
            href="/cotizar"
            aria-label="Ver cotización"
          >
            <ShoppingBag aria-hidden="true" />
            <span className="header-badge-dot" aria-hidden="true" />
          </Link>

          <Link className="button button-small header-cta" href="/cotizar">
            <span>Cotizar</span>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Cerrar menú" : "Abrir menú de navegación"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (App style) */}
      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="mobile-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              id="mobile-drawer"
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              aria-label="Menú principal móvil"
            >
              <div className="mobile-drawer-header">
                <Link className="brand" href="/" onClick={() => setOpen(false)}>
                  <Image
                    src="/brand/mister-fiestas-logo.jpeg"
                    alt=""
                    width={34}
                    height={34}
                  />
                  <span>
                    Mister <em>Fiestas</em>
                  </span>
                </Link>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <ThemeToggle />
                  <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => setOpen(false)}
                    aria-label="Cerrar menú"
                  >
                    <X aria-hidden="true" />
                  </button>
                </div>
              </div>

              <nav className="mobile-drawer-nav">
                {mainNav.map((item) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(active && "is-active")}
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        style={{ width: 18, height: 18, opacity: 0.5 }}
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </nav>

              <div className="mobile-drawer-footer">
                <a
                  className="whatsapp-badge"
                  href="https://wa.me/?text=Hola%20Mister%20Fiestas,%20quisiera%20consultar%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  <span>WhatsApp Directo</span>
                </a>

                <Link
                  className="button"
                  href="/cotizar"
                  onClick={() => setOpen(false)}
                >
                  Solicitar cotización <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
