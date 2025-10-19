import Image from "next/image";

type Logo = { name: string; src: string; alt?: string; width?: number; height?: number };

export default function LogoCloud({ logos }: { logos: Logo[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {logos.map((l) => (
                <Image
                    key={l.name}
                    src={l.src}
                    alt={l.alt ?? l.name}
                    width={l.width ?? 140}
                    height={l.height ?? 32}
                    className="logo-item mx-auto h-8 w-auto"
                    loading="lazy"
                    decoding="async"
                />
            ))}
        </div>
    );
}
