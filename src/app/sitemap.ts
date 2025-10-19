import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        { url: "https://wilden.studio/", lastModified: now, changeFrequency: "weekly", priority: 1 },
        // Ajoute d'autres pages ici quand tu en créeras
    ];
}
