"use client";

import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { env, telLink, whatsappLink } from "@/lib/env";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

const policyLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refunds", href: "/refunds" },
];

export function Footer() {
  return (
    <footer className="bg-primary-900 text-cream-100">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <section className="space-y-4">
          <h3 className="text-caption font-medium uppercase tracking-[0.08em] text-cream-200/80">
            Contact
          </h3>
          <ul className="space-y-3 text-body">
            <li className="flex items-start gap-3">
              <MapPin
                className="h-4 w-4 mt-1 shrink-0 text-cream-200/80"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span>{site.abattoir.address}</span>
            </li>
            <li>
              <a
                href={telLink}
                onClick={() => track("phone_click", { location: "footer" })}
                className="inline-flex items-center gap-3 text-cream-100 hover:text-cream-50 transition-colors duration-160 ease-warm"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {env.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { location: "footer" })}
                className="inline-flex items-center gap-3 text-cream-100 hover:text-cream-50 transition-colors duration-160 ease-warm"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${env.contactEmail}`}
                className="inline-flex items-center gap-3 text-cream-100 hover:text-cream-50 transition-colors duration-160 ease-warm"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {env.contactEmail}
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-caption font-medium uppercase tracking-[0.08em] text-cream-200/80">
            Certifications
          </h3>
          <ul className="space-y-3 text-body">
            <li>{site.certifyingBody}</li>
            <li>OMAFRA-licensed abattoir: {site.abattoir.omafraLicense}</li>
            <li>Insurance: [VERIFY: carrier]</li>
          </ul>
          {/* [PLACEHOLDER] Real halal certifying body logo, once licensed. */}
        </section>

        <section className="space-y-4">
          <h3 className="text-caption font-medium uppercase tracking-[0.08em] text-cream-200/80">
            Policies
          </h3>
          <ul className="space-y-3 text-body">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream-100 hover:text-cream-50 transition-colors duration-160 ease-warm relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-cream-50 after:transition-[width] after:duration-220 after:ease-warm hover:after:w-full motion-reduce:after:transition-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-caption font-medium uppercase tracking-[0.08em] text-cream-200/80">
            About
          </h3>
          <p className="text-body text-pretty max-w-[36ch]">
            A family-run qurbaani service for the {site.serviceArea}. Founded [VERIFY:
            year].
          </p>
        </section>
      </Container>

      <div className="border-t border-cream-200/10">
        <Container className="flex flex-col gap-3 py-6 pb-24 text-body-sm text-cream-200/70 sm:flex-row sm:items-center sm:justify-between lg:pb-6">
          <p>
            © {site.hijriYear} / {site.gregorianYear} {site.name}.
          </p>
          <p className="font-serif italic text-cream-200/80">{site.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
