import Link from "next/link";
import { footerLinks } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          Mister <span>Fiestas</span>
        </div>
        <nav className="footer-nav" aria-label="Enlaces del pie">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} Mister Fiestas. Eventos de alto nivel.
        </p>
      </div>
    </footer>
  );
}
