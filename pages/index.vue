<script lang="ts" setup>
import { siteConfig, socialProfiles } from "~/data/site";

useSeoMeta({
  title: siteConfig.title,
  description: siteConfig.description,
  ogTitle: siteConfig.title,
  ogDescription: siteConfig.ogDescription,
  ogType: "website",
  ogUrl: siteConfig.url,
  ogImage: siteConfig.ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt:
    "Trey Botard, Director of Developer Relations at Atomic: developer experience, customer operations, and AI workflows",
  twitterCard: "summary_large_image",
  twitterTitle: siteConfig.title,
  twitterDescription: siteConfig.twitterDescription,
  twitterImage: siteConfig.ogImage,
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: siteConfig.role,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.company,
        url: siteConfig.companyUrl,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raleigh",
        addressRegion: "NC",
        addressCountry: "US",
      },
      knowsAbout: [
        "Developer Relations",
        "Developer Experience",
        "Customer Systems",
        "Technical Adoption",
        "Applied AI Workflows",
      ],
      sameAs: socialProfiles.map((profile) => profile.url),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}#person` },
    },
  ],
};

useHead({
  link: [{ rel: "canonical", href: siteConfig.url }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredData),
    },
  ],
});
</script>

<template>
  <main id="main-content" class="px-4 pb-12 pt-2 lg:px-0">
    <Bio />
    <SelectedWork />
    <Approach />
    <Experience />
    <Speaking />
    <Contact />
    <TBFooter class="mt-14" />
  </main>
</template>
