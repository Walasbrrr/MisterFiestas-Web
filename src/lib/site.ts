const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  name: "Mister Fiestas",
  description: "Servicios para fiestas y eventos memorables.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
};
