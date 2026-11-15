import { site } from "./site";
import { areas } from "./catalog";
import { faq } from "./faq";
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/assets/logo.jpg`,
      telephone: "+90-530-556-3261",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+90-530-556-3261",
          contactType: "sales",
          availableLanguage: "Turkish",
        },
        {
          "@type": "ContactPoint",
          telephone: "+90-534-273-6607",
          contactType: "sales",
          availableLanguage: "Turkish",
        },
      ],
      areaServed: areas.map((name) => ({ "@type": "Place", name })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "tr-TR",
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "Service",
      name: "Personel yemeği, mevlüt ve organizasyon catering",
      provider: { "@id": `${site.url}/#organization` },
      areaServed: areas,
      serviceType: "Catering",
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};
