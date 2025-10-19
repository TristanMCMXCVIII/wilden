import { ComponentProps } from "react";
import { clsx } from "clsx";

type Props = ComponentProps<"a"> & { variant?: "primary" | "ghost" };

export default function Button({ variant = "primary", className, ...props }: Props) {
    return (
        <a {...props} className={clsx("btn", variant === "primary" ? "btn-primary" : "btn-ghost", className)} />
    )
}
