import {cva} from "class-variance-authority";
import type {BadgeProps} from "./Badge.types.ts";

export const Badge = ({variant="error",children,...props}:BadgeProps) => {

    const classes = cva(
        "badge badge-soft",
        {
            variants: {
                variant: {
                    primary: "badge-primary !border-primary/40",
                    secondary: "badge-secondary !border-secondary/40",
                    error: "badge-error !border-error/40",
                    warning: "badge-warning !border-warning/40",
                    info: "badge-info !border-info/40",
                    success: "badge-success !border-success/40",
                },
            }
        }
    )

    return (
        <div className={`${classes({variant})}`}
             {...props}
        >
            {children}
        </div>
    )
}