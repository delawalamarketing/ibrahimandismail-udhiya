import { tiers } from "@/content/pricing";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { env } from "@/lib/env";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${env.siteUrl}/og/ibrahim-and-ismail-og.jpg`,
    telephone: env.phoneTel,
    email: env.contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Barrie",
      addressLocality: "Barrie",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: site.serviceArea,
    priceRange: "$$$",
    url: env.siteUrl,
  };
}

export function productSchemas() {
  return tiers.map((tier) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${site.name} — ${tier.name}`,
    description: tier.promise,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      price: tier.price,
      availability: "https://schema.org/PreOrder",
      url: `${env.siteUrl}/reserve?tier=${tier.id}`,
    },
  }));
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
