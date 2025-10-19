import { ReactNode } from "react";
import Container from "./Container";

export default function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
    return (
        <section id={id} className={`section ${className}`}>
            <Container>{children}</Container>
        </section>
    )
}
