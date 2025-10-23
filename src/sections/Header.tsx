"use client"

import {useEffect, useState} from "react";
import clsx from "clsx";


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


    return (
        <header className={clsx(
            "fixed top-0 left-0 z-50 w-full py-6 transition-all duration-500 max-lg:py-4",
            hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
        )}>
            <div className="container">
                <img src="/logos/logo_black.svg" alt="Logo Wilden Studio" width={115} height={45} />
            </div>

        </header>
    )
}
