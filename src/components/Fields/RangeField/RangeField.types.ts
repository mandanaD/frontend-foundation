import type {ComponentProps} from "react";

export type RangeFieldProps = ComponentProps<"input"> & {
    variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error" | "neutral";
    sizeInput?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: string;
    required?: boolean;
    label?: string;
    error?: string;
    maxValue?: number;
    minValue?: number;
    defaultValue?: number;
}