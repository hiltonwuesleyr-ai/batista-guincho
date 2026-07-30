import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://batista-guinchos.vercel.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]; }
