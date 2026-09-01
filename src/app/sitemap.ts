import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/servicios",
    "/cotizar",
    "/galeria",
    "/eventos",
    "/empresas",
    "/nosotros",
    "/contacto",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...services
      .filter((service) => !service.outOfCatalog)
      .map((service) => ({
        url: `${siteConfig.url}/servicios/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];
}
