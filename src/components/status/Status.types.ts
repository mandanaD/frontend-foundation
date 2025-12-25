import type {ComponentProps} from "react";

export type StatusProps = ComponentProps<"div"> & {
    variant?: "primary" | "neutral" | "secondary" | "accent" | "info" | "success" | "warning" | "error",
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    animation?: "none" | "ping" | "pulse" | "bounce"
}