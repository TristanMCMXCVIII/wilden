import { ReactNode } from "react";

export default function Container({ className = "", children }: { className?: string; children: ReactNode }) {
    return (
        <div className={`safe-cols ${className}`}>
            {children}
        </div>
    )
}