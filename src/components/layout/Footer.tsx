import * as React from "react";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Calendar,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { agencyConfig } from "@/data/agency";
import { navItems } from "@/data/navigation";
import { servicesData } from "@/data/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card text-card-foreground">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Positioning Column (Col 1-4) */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              aria-label={`${agencyConfig.name} Home`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                {agencyConfig.name}
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {agencyConfig.description}
            </p>

            <div className="mt-2 flex flex-col gap-1 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">
                {agencyConfig.location}
              </span>
              <span>{agencyConfig.workingHours}</span>
            </div>
          </div>

          {/* Navigation Links (Col 5-6) */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links (Col 7-9) */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Services
            </h3>
            <ul className="flex flex-col space-y-2.5">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm inline-flex items-center gap-1 group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Connect (Col 10-12) */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
              Get in Touch
            </h3>
            <div className="flex flex-col space-y-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${agencyConfig.contactEmail}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>{agencyConfig.contactEmail}</span>
              </a>

              {agencyConfig.whatsappUrl && (
                <a
                  href={agencyConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span>WhatsApp Direct Chat</span>
                </a>
              )}

              {agencyConfig.calendlyUrl && (
                <a
                  href={agencyConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
                >
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Book Strategy Call</span>
                </a>
              )}
            </div>

            {/* Social Channels */}
            <div className="mt-2 flex items-center gap-3">
              {agencyConfig.socialLinks.linkedin && (
                <a
                  href={agencyConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-muted transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              )}
              {agencyConfig.socialLinks.twitter && (
                <a
                  href={agencyConfig.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter) Profile"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-muted transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {agencyConfig.socialLinks.instagram && (
                <a
                  href={agencyConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-muted transition-colors"
                >
                  <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} {agencyConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
