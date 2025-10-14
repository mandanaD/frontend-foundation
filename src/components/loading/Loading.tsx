import {cva} from "class-variance-authority";
import type {LoadingTypes} from "./Loading.types.ts";

export const Loading = ({variant="primary",size = "md", shape = "spinner",className="", ...props}: LoadingTypes) => {
    const classes = cva(
        "loading",
        {
            variants: {
                variant: {
                    primary: "text-primary",
                    secondary: "text-secondary",
                    error: "text-error",
                    info: "text-info",
                    success: "text-success",
                    warning: "text-warning"
                },
                shape: {
                    spinner: "loading-spinner",
                    dots: "loading-dots",
                    ring: "loading-ring",
                    ball: "loading-ball",
                    bars: "loading-bars",
                    infinity: "loading-infinity",
                },
                size: {
                    xs: "loading-xs",
                    sm: "loading-sm",
                    md: "loading-md",
                    lg: "loading-lg",
                    xl: "loading-xl",
                }
            },
        }
    )
    return (
        <span className={`${classes({variant,size,shape})} ${className}`} {...props}/>
    )
}