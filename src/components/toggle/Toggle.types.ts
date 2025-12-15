import type {ComponentProps} from "react";

export type ToggleProps = ComponentProps<"div"> & {
    variant: "primary" | "secondary" | "success" | "warning" | "info" | "error";
    size: "xs" | "sm" | "md" | "lg" | "xl";
    checked?: boolean;
    defaultChecked?: boolean;
}