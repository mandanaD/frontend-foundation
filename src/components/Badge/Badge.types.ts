import type {ComponentProps} from "react";

export type BadgeProps = ComponentProps<"div"> & {
    variant: "primary" | "secondary" | "success" | "info" | "warning" | "error";
}