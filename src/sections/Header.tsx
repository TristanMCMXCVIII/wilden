"use client"

import {useEffect, useState} from "react";
import clsx from "clsx";
import Link from "next/link";


export const Header = () => {

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const nav = [
        { label: "Portfolio", href: "/portfolio" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className={clsx(
            "fixed top-0 left-0 z-50 w-full transition-all duration-500 max-lg:py-4",
            hasScrolled ? "py-2 bg-white/80 backdrop-blur-[2px]" : "py-8",
        )}>
            <div className="container flex justify-between items-center gap-4">
                <Link href="/">
                    <img
                        src="/logos/logo_black.svg"
                        alt="Logo Wilden Studio"
                        width={115}
                        height={45} />
                </Link>

                {/* Navigation */}
                <nav aria-label="Navigation principale">
                    <ul className="flex items-center gap-6">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-neutral-900 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </header>
    )
}
