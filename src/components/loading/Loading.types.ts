import type {ComponentProps} from "react";

export interface LoadingTypes extends ComponentProps<"span"> {
    variant?: "primary" | "secondary" | "error" | "info" | 'success'|"warning",
    shape?: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity",
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    className:string
}