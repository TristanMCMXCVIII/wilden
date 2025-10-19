import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/libs/constants";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
    title: SITE.name,
    description: SITE.description,
    metadataBase: new URL(SITE.url),
    openGraph: {
        title: SITE.name,
        description: SITE.description,
        url: SITE.url,
        images: [{ url: SITE.ogImage }],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE.name,
        description: SITE.description,
        images: [SITE.ogImage],
    },
    alternates: {
        canonical: SITE.url,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const orgJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}${SITE.ogImage}`,
        sameAs: [
            // Mets ton LinkedIn / X / GitHub si tu veux
        ],
    };

    return (
        <html lang="fr" className={inter.variable}>
        <body>
        {/* Skip link accessibilité */}
        <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-md"
        >
            Aller au contenu
        </a>

        {children}

        {/* Plausible Analytics (RGPD-friendly, sans cookies) */}
        <script
            defer
            data-domain="wilden.studio"
            src="https://plausible.io/js/script.js"
        />

        {/* JSON-LD Organization */}
        <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        </body>
        </html>
    );
}
